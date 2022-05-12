import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Spinner from "../Spinner";

const MealsInfo = () => {
    const [meal,setMeal] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [ingredients,setIngredients] = useState([])
    const getIngredients = () => {
        let result = []
        for(let i = 0; i< 20; i++) {
            if(meal[`strIngredient${i + 1}`])
                result = [...result,meal[`strIngredient${i + 1}`]]
        }
        setIngredients(result)
    }
    const {id} = useParams()

    useEffect(()  => {
        axios(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${id}`)
            .then((res) => {
                setMeal(res.data.meals[0])
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
                className="btn element-btn">Back</button> </Link>
            <div className="row">
                <div  className="col-3">
                    <h2 className="meal-title">{meal.strMeal}</h2>
                    <img className="item-img" src={meal.strMealThumb} alt="" width="100%"/>
                    <Link
                        to={`/latestMeals/${+id+ 1}`}><button
                        className="btn element-btn" >Go Next</button> </Link>
                </div>
                <div className="col-8">
                    <h2 className="meal-title">Ingredients</h2>
                    <div className="row">
                        {
                            ingredients.map((ingredient,index) => (
                                <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}} to={`/ingredients/${ingredient}`} key={index} className="item-col">
                                    <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=""/>
                                    <h4 className="element-title">{ingredient}</h4>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MealsInfo;