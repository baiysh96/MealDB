import React, {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import logo from "../../assets/images/logo-small.png"
import facebook from "../../assets/images/facebook_icon.png"
import twitter from "../../assets/images/logo-twitter.25333c6b71e7d347c18c.png"
const Header = () => {
    const navigate = useNavigate()
    const [active,setActive] = useState(false)
    const [search,setSearch] = useState("")
    const handleChange = (e) => setSearch(e.target.value)
    const handleSearch = (e) => {
        if(e.key === "Enter"){
            navigate(`/browse/${search}`)
            setSearch("")
        }
    }
return(
<div>
    <header className="header">
        <div className="container">
            <div className="side-bar" >
                <div>
                    <Link to="/"><img className="logo" src={logo} alt="" /></Link>
                </div>
              <nav className={active? 'menu show' : 'menu' } onClick={() => setActive(false)}>
                  <Link style={{marginRight: 20, textDecoration: 'none',color:'white'}} to="/"  ><button className="btn btn-danger">Home</button></Link>
                  <Link style={{marginLeft: 20, textDecoration: 'none',color:'white'}} to="/meals" ><button className="btn btn-danger">About</button></Link>
                  <Link style={{marginLeft: 20, textDecoration: 'none',color:'white'}} to="/latestMeals"><button className="btn btn-danger">
                      <img src={facebook} width="30px" height="20px" alt=""/></button></Link>
                  <Link style={{marginLeft: 20, textDecoration: 'none',color:'white'}} to="/latestMeals"><button className="btn btn-danger">
                      <img src={twitter} width="30px" height="20px" alt=""/></button></Link>
                  <input placeholder="Search"  onChange={handleChange} onKeyPress={handleSearch} type="text"  className="search-form" value={search} />
              </nav>
                <div className={active? 'burger show-menu':'burger' } onClick={() => setActive(!active)}>
                    <span/>
                </div>
            </div>
        </div>
    </header>
</div>
)
}
export default Header;