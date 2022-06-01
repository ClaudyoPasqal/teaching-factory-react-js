import React from "react";
import { Link } from "react-router-dom";
import './css/Login.css'

function Login(){
    return(
        <div className="isi">
            {/* Home start */}
            <div className="homebtn1">
                <Link to="/" id="homeimage">
                    <img src="../images/Frame.png" alt="" />
                    
                </Link>
            </div>
            {/* Home End */}
            {/* Login Start */}
            <div className="container1">
                <div className="login1">
                    <h1 id="logintext">Login</h1>
                    <input type="text" placeholder=" Email" className="input" />
                    <Link to="/" id="admin"><input type="text" placeholder=" Password" className="input"/> </Link>
                    <Link to="/after" id="after"><input type="submit" id="login2" value="Login" /></Link>
                    <h3 id="akun">Don't have an account ? Klik <Link to="/register" id="register">Here</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Login;