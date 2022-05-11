import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo-small.png"
const Header = () => {
    const [active,setActive] = useState(false)
return(
<div>
    <header className="header">
        <div className="container">
            <div className="side-bar">
                <div>
                    <img className="logo" src={logo} alt="" />
                </div>
            <nav className={active? 'menu show' : 'menu' }>
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to="/">Home</Link>
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to="/latestMeals">Latest Meals</Link>
                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white',margin:"20px"}} to="/meals" >Random Meals</Link>
                <input type="text" name="s" className="search-form" autoComplete="off" placeholder=" Search"/>
            </nav>
                <div className="burger" onClick={() => setActive(!active)}>
                    <span/>
                </div>
            </div>
        </div>
    </header>
</div>
)
}
export default Header;