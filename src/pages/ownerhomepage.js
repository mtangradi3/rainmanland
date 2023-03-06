import React from 'react'
import projectStyles from './ownerhomepage.module.css'
import styles from './ownerhomepage.module.css'
import Button from 'react-bootsrap/Button'

const OwnerHomePage = (props) => {
  /*EVENT LISTENERS & HANDLERS GO HERE */
  return (
    <div className={styles['page']}>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    </head>
      
      
      <h1 className={styles['text']}>
        <span>Business Settings</span>
      </h1>
      {/** Container for Service Area and Controller Pricing settings */}
      <div id="container--top" className={styles['top-container']}>
        {/**Form for sprinkler controller pricing info */}
        <form
          id='form--controllers'
          name='form--controllers'
          className={styles['form--controllers']}
          >
            <h3 id="heading--controllers" className={styles['heading--controllers']}>
              <span className={styles['heading--controllers']}>Controller Pricing</span>
            </h3>
            <div
              id='container-controller-table'
              name='container-controller-table'
              className={styles['container-controller-table']}>
            <section
              id='table--controllers'
              name='table--controllers'
              className={styles['table--controlllers']}
              >
                <thead>
                  <tr>
                    <th>
                      <h4>Brand</h4>
                    </th>
                    <th>
                      <h4>Cost Multiplier</h4>
                    </th>
                  </tr>
                </thead>
                 {/** TO DO: Generate table with JavaScript function **/}
                <tbody id='table-body--controllers' className={styles['table-body--controllers']}>
                  <tr>
                      <td>test brand 1</td>
                      <td>1.5x</td>
                  </tr>
                  <tr>
                      <td>test brand 2</td>
                      <td>1.5x</td>
                  </tr>
                  <tr>
                      <td>test brand 3</td>
                      <td>1.5x</td>
                  </tr>
                  <tr>
                      <td>test brand 4</td>
                      <td>1.5x</td>
                  </tr>
                  <tr>
                      <td>test brand 5</td>
                      <td>1.5x</td>
                  </tr>
                </tbody>
              </section>
              </div>
              <input
                id='input--brand'
                name='input--brand'
                className={styles['input--brand']}
                placeholder='Controller Brand Name'
                >
              </input>
              <input
                id='input--price'
                name='input--price'
                className={styles['input--price']}
                placeholder='Price'
                >
                </input>
          </form>
        {/*BEGIN SERVICE AREA SETTINGS*/}
        <form
          id="form--service-area"
          name="form"
          className={styles['form--service-area']}
        >
          <div className={styles['service-area-wrapper']}>
            <h3 id="heading--srvc-area" className={styles['heading-srvc-area']}>
              <span className={styles['heading--srvc-area']}>Business Address & Service Area</span>
            </h3>
            <form
              id="input--business-address"
              name="business-street-address"
              className={styles['address-form']}
            >
              <input
                type="text"
                id="input--business-address1"
                placeholder="Business Address 1"
                className={` ${styles['biz-address1']} ${projectStyles['input']} `}
              />
              <input
                type="text"
                id="input--business-address2"
                placeholder="Business Address 2"
                className={` ${styles['biz-address2']} ${projectStyles['input']} `}
              />
              <input
                type="text"
                id="input--city"
                name="input city"
                placeholder="City"
                className={` ${styles['input-city']} ${projectStyles['input']} `}
              />
              <input
                type="text"
                id="input--state"
                name="input-state"
                placeholder="State"
                className={` ${styles['input-state']} ${projectStyles['input']} `}
              />
              <input
                type="text"
                id="input--zip-code"
                name="zip code"
                value="ZIP"
                placeholder="ZIP"
                className={` ${styles['input-zip']} ${projectStyles['input']} `}
              />
              <h4 className={styles['radius']}>
                <span>Radius:</span>
              </h4>
              <select
                id="slct--radius"
                name="select-radius"
                className={styles['select-radius']}
              >
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="15">15 miles</option>
                <option value="20">20 miles</option>
                <option value="25">25 miles</option>
          </select>
            <button
            id="btn--srvc-area"
            name="btn--srvc-area"
            className={` ${styles['confirm']} ${projectStyles['button']} `}
          >
            <span id="btn-confirm-text" className={styles['btn-confirm-text']}>
              <span>Confirm</span>
            </span>
            </button>
            </form>
           </div>
            
          </form>
        {/** END SERVICE AREA SETTINGS */}
      </div>
      {/** Container for time tracking */}
      <div id="container--bottom" className={styles['bottom-container']}>
        <div id="container--schedule" className={styles['container--schedule']}>
          <h3 id='header-schedule' className ={styles['header-schedule']}>Schedule</h3>
        </div>
      </div>
    </div>
  )
}

export default OwnerHomePage