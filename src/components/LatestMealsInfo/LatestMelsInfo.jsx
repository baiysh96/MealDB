import React from 'react';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const LatestMelsInfo = () => {
    const [latestMeals,setLatestMeals] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {id} = useParams()
    useEffect(()  => {
        axios(`https://www.themealdb.com/api/json/v2/1/latest.php/${id}`)

            .then((res) => {
                setLatestMeals(res.data)
                console.log(res.data)
                setIsLoading(false)
            })
    },[id])
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div className="container">
            <Link
                to="/latestMeals" ><button
                className="btn btn-danger">Back</button> </Link>
            <div className="row">
                <div  className="col-3">
                    <h2 className="meal-title">{latestMeals.meals[id].strMeal}</h2>
                    <h2 className="meal-title">{latestMeals.meals[id].idMeal}</h2>
                    <img className="item-img" src={latestMeals.meals[id].strMealThumb} alt="" width="100%"/>
                    <img src={latestMeals.meals[id].strSource} alt=""/>
                </div>
                <div className="col-8">
                    <h2 className="meal-title">Ingredients</h2>
                    <div className="list-group">
                        <div
                            className="list-group-item">{latestMeals.meals[id].strIngredient1}
                            <img src={`https://www.themealdb.com/images/ingredients/${id}.png`} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );;
};

export default LatestMelsInfo;