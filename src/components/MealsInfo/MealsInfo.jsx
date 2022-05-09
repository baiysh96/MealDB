import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Spinner from "../Spinner";

const MealsInfo = () => {
    const [meals,setMeals] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {slug} = useParams()
    useEffect(()  => {
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php/${slug}`)
            .then((res) => {
                setMeals(res.data)
                setIsLoading(false)
            })
    },[slug])
    if(isLoading){
        return <Spinner/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    {meals.meals.idMeal}
                </div>
                <div className="col-7">

                </div>
            </div>

        </div>
    );
};

export default MealsInfo;