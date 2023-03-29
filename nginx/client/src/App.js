/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import './style/App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { withRouter } from './components/withRouter'

// These imports are where we get front end components from .jsx files so we don't have
// to define them directly inside this file.
// IMPORTANT NOTE: filename and class name must start with a capital letter to be
// 				   imported! I was stuck on this for two hours.
import LandingPage from './components/LandingPage.jsx';
import CustomerInfoPage from "./components/CustomerInfoPage";
import Calendar from "./components/Calendar";
import EmployeeSignInPage from "./components/EmployeeSignInPage";
import OwnerDashboard from "./components/OwnerDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

// The App class handles the components that appear on the front end and sends requests
// to the node.js backend (index.js) each time the front end needs to interact with the
// database. This is basically the core of the front end.
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // state attribute that controls which page is rendered
            currentPage: 'LandingPage',

            // state attribute that remembers the user's info (false means they are not logged in)
            userInfo: false,

            // state attribute that remembers the info given in the Customer Info page
            customerInfo: {
                controller_is_outside: null,
                controller_brand:null,
                brand: null,
                unitsPerZone: null,
                zone_amount: null,
                address: null,
                first_name: null,
                last_name: null,
                date_occuring : null,
                is_complete : null,
                zip_code : null,
                phone_number : null,
                //for crews
                crew_name: null,

            },

            // other state attributes
            setSomeField1: '',
            setSomeField2: '',
            fetchJobsTodayData: [],
            someFieldUpdate: ''
        };

        // The following bindings are set so the App component automatically updates itself whenever they are called
        this.handleEmpLoginButtonClick = this.handleEmpLoginButtonClick.bind(this);
        this.handleGoToCalendarButtonClick = this.handleGoToCalendarButtonClick.bind(this);
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // The following handlers change the "currentPage" state attribute to a new page from the "components" directory,
    // which triggers one of the bindings right up there^^^, which calls App.render() to render that page.

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // When the user clicks the "Log in" button on EmployeeSignInPage, this method validates the credentials and brings
    // up the appropriate dashboard for the employee
    handleEmpLoginButtonClick(email, pw) {
        axios.post("/api/verify-user", {sentEmail: email, sentPw: pw})
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        userInfo: response.data.queryResult[0]
                    })
                }
                else {
                    this.setState({
                        userInfo: false,
                    });
                    alert(response.data.message)
                    return;
                }
                if (this.state.userInfo.user_type === "boss") {
                    console.log("user is owner");
                    this.props.navigate('/owner-dashboard');
                }
                else if (this.state.userInfo.user_type === "crew_member") {
                    console.log("user is employee")
                    this.getJobsTodayForCrew(this.state.userInfo.crew_number)
                    this.props.navigate('/employee-dashboard');
                }
            })
    }

	// Add a new user (called when user clicks "submit" on the add employee form)
	onNewEmployeeSubmit(childComponentState) {
		axios.post("/api/add-user", childComponentState)
			.then((response) => {
				if (response.data.success) {
					console.log(response.data.message);
					alert("Employee added successfully.");
				}
				else {
					console.log(response.data.message);
					alert("Error while adding employee.");
				}
			})
	}

    // when a user clicks on the "Go to Calendar" button in the appointment info page, this handler is triggered
    handleGoToCalendarButtonClick(custInfo) {
        this.setState({
            customerInfo: custInfo
        });
        this.props.navigate('/calendar');
    }

    // gets a list of today's jobs for the specified crew from the database
    getJobsTodayForCrew(crew_name) {
        axios.get(`/api/get-jobs/${crew_name}`)
            .then((response) => {
                this.setState({
                    fetchJobsTodayData: response.data
                })
            })
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]: val
        })
    };

    handleChange2 = (event) => {
        this.setState({
            someFieldUpdate: event.target.value
        })
    }

    submit = () => {
        axios.post('/api/insert', this.state)
	    .then(() => { alert('success post') })
	console.log(this.state)
	document.location.reload();
    }

    delete = (id) => {
        if (confirm("Do you want to delete? ")) {
            axios.delete(`/api/delete/${id}`)
            document.location.reload()
		}
    }

    edit = (id) => {
        axios.put(`/api/update/${id}`, this.state)
	document.location.reload();
    }

	// loads components from the landing_page.jsx file and renders them in the browser
    render() {

        const App = () => (
            <div>
                <Routes>
                    <Route path='/' element={<LandingPage propsWork={true}/>}/>
                    <Route path='employee-login' element={<EmployeeSignInPage
                        onLoginClick={this.handleEmpLoginButtonClick} 
						onNewEmployeeSubmit={this.onNewEmployeeSubmit} />} />
                    <Route path='appointment-info' element={<CustomerInfoPage
                        onGoToCalendarButtonClick={this.handleGoToCalendarButtonClick}/>}/>
                    <Route path='calendar' element={<Calendar
                        custInfo={this.state.customerInfo} />} />
                    <Route path='owner-dashboard' element={<OwnerDashboard />}/>
                    <Route path='employee-dashboard' element={<EmployeeDashboard
                        jobsToday={this.state.fetchJobsTodayData}
                        crewNum={this.state.userInfo.crew_number} />} />
                </Routes>
            </div>
        )

        // the render method will display whichever page is set as by the React router
        return (
            <App />
        );
	}
}

export default withRouter(App);
