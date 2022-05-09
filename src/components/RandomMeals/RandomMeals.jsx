import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

const RandomMeals = () => {
    const [meals,setMeals] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()  => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then((res) => {
                setMeals(res.data)
                setIsLoading(false)
            })
    },[])
    if(isLoading){
        return <Spinner />
    }
    return (
<div>

    <div className="container">
        <h2 className="title">Random Meals</h2>
        <div className="row">
            {
                meals.meals.map((oneMeal,idx) =>(

                    <div key={idx} className="item-col">
                        <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/meals/${idx + 1}`} className="item-meal">
                            <img className="item-img" src={oneMeal.strMealThumb} alt=""/>
                            {oneMeal.strMeal}
                        </Link>
                    </div>
                ) )
            }
        </div>
    </div>
</div>
    );
};

export default RandomMeals;