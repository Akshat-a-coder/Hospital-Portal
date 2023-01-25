import React from 'react'

import './registration.css';

const Registration = () => (
  <>
  {/* <link rel="stylesheet" type="text/css" href="index.css" />
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./css/main.css" /> */}
  {/* <title>Credit Card - Input Form</title> */}
  <div className="registration--container">
    <div className="registration--form">
      <h1>QUICK REGISTER</h1>
      <form action="#">
        <div className="registration--flex-row">
          <label htmlFor="card-number">Patient Name</label>
          <input
            name="card-number"
            className="registration--card-number"
            type="text"
            defaultValue=""
          />
        </div>
        <div className="registration--flex-row">
          <label htmlFor="card-name">Patient Age (उम्र) </label>
          <input
            name="card-name"
            className="registration--card-name"
            type="number"
            defaultValue={35}
          />
        </div>
        <div className="registration--flex-row">
          <table>
            <tbody>
              <tr>
                <td className="registration--table-column">
                  <label htmlFor="month">Sex/Gender (लिंग)</label>
                  <select name="year" id="registration--year-select">
                    <option value="Year" selected="" disabled="">
                      Gender(लिंग)
                    </option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*         <div class="flex-row">
     <label for="card-name">Sex/Gender(लिंग)</label>
     
     <input name="card-name" class="card-name" type="text" value="Female">
     
   </div> */}
        <div className="registration--flex-row">
          <label htmlFor="card-name">
            Mobile Number
            <h6 font-color="red"> *OTP will be sent on this number </h6>
          </label>
          <input
            name="card-name"
            className="registration--card-name"
            type="text"
            defaultValue=""
          />
        </div>
        <div className="registration--flex-row">
          <input className="registration--card-submit" type="submit" />
        </div>
      </form>
      {/*       <img class="card-image" src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png" alt="Card image">
 <div class="card-image-shadow"></div> */}
    </div>
  </div>
</>

)

export default Registration
