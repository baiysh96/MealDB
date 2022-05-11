import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo-small.png"
const Header = () => {
return(
<div>
    <header className="header">
        <div className="container">
            <div className="side-bar">
                <div>
                    <img className="logo" src={logo} alt="" />
                </div>
            <nav className="menu">
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to="/">Home</Link>
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white',margin:"20px"}} to="/meals" >Meals</Link>
                <input type="text" name="s" className="search-form" autoComplete="off" placeholder=" Search"/>

            </nav>
            </div>
        </div>
    </header>
</div>
)
}
export default Header;