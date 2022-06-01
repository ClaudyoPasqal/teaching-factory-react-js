import React from "react";
import { Link } from "react-router-dom";
import NavbarAfterCss from './css/NavbarAfter.module.css';


function NavbarAfter(){
    return(
        <div className={NavbarAfterCss.container}>
            <div className={NavbarAfterCss.navbar}>
                <div className={NavbarAfterCss.btn}>
                    <Link to="/"><img src="../images/Frame.png" alt="" /></Link>
                </div>
                <div className={NavbarAfterCss.cart}id={NavbarAfterCss.cart}>
                    <img src="../images/keranjang.png" alt="" />
                </div>

            </div>
            <div className={NavbarAfterCss.action}>
                <div className={NavbarAfterCss.profile}>
                    <img src="../images/user.png" alt="" />
                </div>
                <div className={NavbarAfterCss.menu}>
                    <ul>
                        <li><img src="../images/user 2.png" alt="" /><Link to="/">Profile</Link></li>
                        <li className={NavbarAfterCss.border}><img src="../images/logout 1.png" alt="" />Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default NavbarAfter;