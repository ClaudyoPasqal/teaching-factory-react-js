import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarCss from "./css/NavbarCart.module.css"


function NavbarCart(){
    
    let navigate = useNavigate("")
    const logout = async (e) =>{
        e.preventDefault()
        const { user, error } = await kontenbase.auth.logout()
        navigate('/')
        console.log(user, error)
    }
    return(
    <div className={NavbarCss.isi}>
        <div className={NavbarCss.container}>
            <div className={NavbarCss.navbar}>
                <div className={NavbarCss.btn}>
                    <Link to="/"><img src="../images/Frame.png" alt="" /></Link>
                </div>
                <div className={NavbarCss.cart}id={NavbarCss.cart}>
                    <Link to="/cart">
                    <img src="../images/Keranjang 3.png" alt="" />
                    </Link>
                </div>

            </div>
            <div className={NavbarCss.action}>
                <div className={NavbarCss.profile}>
                    <img src="../images/user.png" alt="" />
                </div>
                <div className={NavbarCss.menu}>
                    <ul>
                        <li><img src="../images/user 2.png" alt="" /><Link to="/">Profile</Link></li>
                        <li className={NavbarCss.border} onClick={logout}><img src="../images/logout 1.png" alt="" />Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}


export default NavbarCart;
