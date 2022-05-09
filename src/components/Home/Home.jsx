import React from 'react';
import img from "../../assets/meal-icon.png"
import line from "../../assets/separator.jpeg"
import RandomMeals from "../RandomMeals";
import LatestMeals from "../LatestMeals";

const Home = () => {
    return (
        <div>
        <div className="container">
           <div className="hero">
               <div className="item-col">
                   <img src={img} alt=""/>
               </div>
               <div className="col-8 ">
                  <h1 className="hero-title">Welcome to TheMealDB</h1>
                   <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                       We also offer a free JSON API for anyone wanting to use it, with additional features for
                       subscribers.
                   </p>
               </div>
               <div className="item-col">
                   <img src={img} alt=""/>
               </div>
           </div>
            <img className="line-img" src={line} alt="" width="100%"/>
        </div>
            <LatestMeals />
            <RandomMeals />
        </div>
    );
};

export default Home;