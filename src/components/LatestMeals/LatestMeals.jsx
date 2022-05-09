import React, {useEffect, useState} from 'react';
import axios from "axios"
import Spinner from "../Spinner";

const LatestMeals = () => {
    const [latestMeals,setLatestMeals] = useState()
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/latest.php`)
            .then((res) => {
                setLatestMeals(res.data)
                setIsLoading(false)
            })
    },[])
    if(isLoading){
        return <Spinner />
    }
    return (
       <div className="container">
           <h2 className="title" >Latest Meals</h2>
           <div className="row">
               {
                   latestMeals.meals.map((oneMeal,index) => (
                       <div key={index} className="item-col">
                           <img className="item-img" src={oneMeal.strMealThumb} alt=""/>
                           {oneMeal.strMeal}
                       </div>
                   ))
               }
           </div>

       </div>
    );
};

export default LatestMeals;