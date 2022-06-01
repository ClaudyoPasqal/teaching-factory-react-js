import React from "react";
import { Link } from "react-router-dom";
import './css/Register.css'

function Register(){
    return(
        <div className="container2">
            <div className="homebtn2">
                <Link to="/" id="homeimage1">
                    <img src="../images/Frame.png" alt="" />
                </Link>
            </div>
            <div className="isi1">
                <div className="register1">
                    <h1 id="registertext">Register</h1>
                    <input type="text" placeholder=" Email" className="input1" />
                    <input type="text" placeholder=" Password" className="input1"/>
                    <input type="text" placeholder=" Fullname" className="input1"/>
                    <Link to="/after"><input type="submit" value="Register" id="afterlogin"/></Link>
                    <h3 id="akun1">Already have an account ? Klik <Link to="/login" id="login">Here</Link></h3>
                </div>
            </div>
        </div>
    )
};


export default Register;