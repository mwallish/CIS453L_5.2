import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./DMVLogo.jpeg";

const createAccount = (
    <div>
        <img src={logo} alt="DMV Logo" />

        <h1>Create Customer Account</h1>

        <form>
            <div id="first">
                <h2 id="fnl">First Name:</h2>
                <input type="text" id="fName" />
            </div>

            <div id="last">
                <h2 id="lnl">Last Name:</h2>
                <input type="text" id="lName" />
            </div>

            <div id="add">
                <h2 id="addl">Address:</h2>
                <input type="text" id="address" />
            </div>

            <div id="cty">
                <h2 id="cl">City:</h2>
                <input type="text" id="city" />
            </div>

            <div id="sta">
                <h2 id="sl">State:</h2>
                <input type="text" id="state" />
            </div>

            <div id="zip">
                <h2 id="zl">Zip Code:</h2>
                <input type="text" id="zipCode" />
            </div>

            <div id="driver">
                <h2 id="dl">Driver's License Number: (No hyphens or Dashes)</h2>
                <input type="text" id="licenseNO" />
            </div>
            <div id="canc">
                <button id="cancel" type="button">Cancel</button>
            </div>
            <div id="create">
                <button id="createAccount" type="button">Create Account</button>
            </div>
        </form>
    </div>
)

ReactDOM.render(createAccount, document.getElementById("root"));