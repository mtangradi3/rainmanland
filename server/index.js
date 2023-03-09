// import packages downloaded with npm install <package1> <package2>
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const dbController = require('./dbController');

// initialize the Express app
const app = express();

// enable CORS security headers
app.use(cors());

// add an Express method to parse the POST method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// add MySQL database connection
// const db = mysql.createPool({
//     host: 'localhost', // the host name
//     user: 'dev', // the database user
//     database: 'rainmanland', // database name
//     port: '3307'
// })



// You can now use the `dbController` object to execute queries on the database
dbController.query('SELECT * FROM rainmanland.user', function(err, results) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
})



//test connection to database
// db.connect(function (err) {
//     if(err) throw err;
//     db.query("select * from rainmanland.user;", function(err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     })
//
// })




// add a home page route
app.get('/', (req, res) => {
    res.send('Hello world')
})

// [TEMPLATE] retrieve something from the database
app.get('/get-something', (req, res) => {
    const SelectQuery = " SELECT * FROM table_name";
    db.query(SelectQuery, (err, result) => {
        res.send(result)
    })
})

// [TEMPLATE] insert something into the database
app.post('/insert-something', (req, res) => {
    const someField1 = req.body.setSomeField1;
    const someField2 = req.body.setSomeField2;
    const InsertQuery = "INSERT INTO table_name (field_name1, field_name2) VALUES (?, ?)";
    db.query(InsertQuery, [someField1, someField2], (err, result) => {
        console.log(result)
    })
})

// [TEMPLATE] delete something from the database
app.delete("/delete/:someId", (req, res) => {
    const someId = req.params.someId;
    const DeleteQuery = "DELETE FROM table_name WHERE id = ?";
    db.query(DeleteQuery, bookId, (err, result) => {
        if (err) console.log(err);
    })
})

// [TEMPLATE] update something in the database
app.put('/update/:someId', (req, res) => {
    const someField = req.body.someFieldUpdate;
    const someId = req.params.someId;
    const UpdateQuery = "UPDATE table_name SET field_name = ? WHERE id = ?";
    db.query(UpdateQuery, [someField, someId], (err, result) => {
        if (err) console.log(err)
    })
})

// Check credentials against db and return user info if credentials are good
// TODO: make this secure by storing hashed passwords instead of plaintext. this is a placeholder for the demo
app.post('/get-user-info', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const SelectQuery = "SELECT password_hash FROM rainmanland.user;";

    dbController.query(SelectQuery,  (err, result) => {
        if(err) console.log(err);
        res.send(result);
        console.log(result);
    })


})

// get a list of today's jobs for the crew number passed as URL param
app.get('/get-jobs/:crewNum', (req, res) => {
    const crewNum = req.params.crewNum
    // TODO: make this query actually do its job - this is just for the demo again
    const GetJobsQuery = "SELECT * FROM appointments";
    db.query(GetJobsQuery, (err, result) => {
        if (err) console.log(err);
        res.send(result);
    })
})

// add a port to expose the API when the server is running
app.listen('3001', () => { })

