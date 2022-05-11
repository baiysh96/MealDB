import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Spinner from "../Spinner";

const MealsInfo = () => {
    const [meals,setMeals] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {slug} = useParams()
    useEffect(()  => {
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php/${slug}`)
            .then((res) => {
                setMeals(res.data)
                console.log(res.data)
                setIsLoading(false)
            })
    },[slug])
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div className="container">
            <Link
                to="/meals" ><button
                className="btn btn-danger">Back</button> </Link>
            <div className="row">
               <div  className="col-3">
                   <h2 className="meal-title">{meals.meals[slug].strMeal}</h2>
                   <img className="item-img" src={meals.meals[slug].strMealThumb} alt="" width="100%"/>
                   <img src={meals.meals[slug].strSource} alt=""/>
               </div>
                  <div className="col-8">
                      <h2 className="meal-title">Ingredients</h2>
                      <ul className="list-group">
                          <li className="list-group-item">{meals.meals[slug].strInstructions}</li>
                      </ul>
                      <img src={`/images/media/meals/${slug  + 1}.jpg`} alt=""/>

                  </div>

            </div>

        </div>
    );
};

export default MealsInfo;