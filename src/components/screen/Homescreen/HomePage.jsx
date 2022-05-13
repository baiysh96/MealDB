import React from 'react';
import img from "../../../assets/meal-icon.png"
import line from "../../../assets/separator.jpeg"
import LatestMeals from "../../LatestMeals";
import RandomMeals from "../../RandomMeals";


const HomePage = () => {
    return (
        <div>
        <div className="container">
           <div className="row">
               <div className="item-col">
                   <img src={img} alt=""/>
               </div>
               <div className="col-7">
                  <h1 className="hero-title">Welcome to TheMealDB</h1>
                   <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                       We also offer a free JSON API for anyone wanting to use it, with additional features for
                       subscribers.
                   </p>
               </div>
               <div className="item-col">
                   <img src={img} alt="" height="100%"/>
               </div>
           </div>
            <img className="line-img" src={line} alt="" />
        </div>
            <LatestMeals />
            <div className="container">
                <img className="line-img" src={line} alt="" />
            </div>
            <RandomMeals />
     </div>
    );
};

export default HomePage;