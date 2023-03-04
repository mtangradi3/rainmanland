import React from 'react'

import projectStyles from './ownerhomepage.module.css'
import styles from './ownerhomepage.module.css'

const OwnerHomePage = (props) => {
  /*EVENT LISTENERS & HANDLERS GO HERE */
  return (
    <div className={styles['container']}>
      <h1 className={styles['text']}>
        <span>Business Settings</span>
      </h1>
      {/** Container for Service Area and Controller Pricing settings */}
      <div id="container--top" className={styles['top-container']}>
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
        {/**Form for sprinkler controller pricing info */}
        
      </div>
      {/** Container for time tracking */}
      <div id="container--bottom" className={styles['bottom-container']}></div>
    </div>
  )
}

export default OwnerHomePage