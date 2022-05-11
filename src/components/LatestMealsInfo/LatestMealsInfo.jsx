import React from 'react';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const LatestMealsInfo = () => {
    const [latestMeals,setLatestMeals] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [ingredients,setIngredients] = useState([])
    const getIngredients = () => {
        let result = []
        for(let i = 0; i< 20; i++) {
            if(latestMeals[`strIngredient${i + 1}`])
            result = [...result,latestMeals[`strIngredient${i + 1}`]]
        }
        setIngredients(result)
    }
    const {id} = useParams()

    useEffect(()  => {
        axios(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${id}`)
            .then((res) => {
                setLatestMeals(res.data.meals[0])
                getIngredients(res.data.meals[0])
                setIsLoading(false)
            })
    })
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div className="container">
            <Link
                to="/" ><button
                className="btn element-btn" >Back</button> </Link>
            <div className="row">
                <div  className="col-3">
                    <h2 className="meal-title">{latestMeals.strMeal}</h2>
                    <img className="item-img" src={latestMeals.strMealThumb} alt="" width="100%"/>
                </div>
                <div className="col-8">
                    <h2 className="meal-title">Ingredients</h2>
                    <div className="row">
                        {
                            ingredients.map((ingredient,index) => (
                                <div key={index} className="item-col">
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=""/>
                                    <h4 className="element-title">{ingredient}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LatestMealsInfo;