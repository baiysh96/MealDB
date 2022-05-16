import React from 'react';
import footerLogo from "../../assets/images/logo-tadb.png"
import footerLogo2 from "../../assets/images/logo-tcdb.png"
import footerLogo3 from "../../assets/images/logo-tsdb.png"
import {Link} from "react-router-dom";
const Footer = () => {
    return (
            <footer>
                <div className="container">
                <div className="row">
                    <div className="element-col footer-logos">
                        <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white',fontSize:'16px'}}  to={`https://www.mealdb.com`}><p>© 2022 TheMealDB Proudly built in the UK </p></Link>
                    </div>
                   <div className="col-5">
                     <div className="footer-logos">
                         <Link to="*"><img src={footerLogo} width="116px" height="30px" alt=""/></Link>
                         <Link to="*"><img src={footerLogo2} alt=""/></Link>
                         <Link to="*"><img src={footerLogo3} alt=""/></Link>
                     </div>
                   </div>
                    <div className="col-3">
                        <nav className="menu">
                           <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white',fontSize:'16px'}} to="/">About</Link>
                           <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white',fontSize:'16px'}} to="/">Faq</Link>
                           <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white',fontSize:'16px'}} to="/">Contact</Link>
                        </nav>
                    </div>
                </div>
        </div>
            </footer>
    );
};

export default Footer;