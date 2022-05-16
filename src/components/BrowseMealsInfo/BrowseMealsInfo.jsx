import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Link, useParams} from "react-router-dom";
const BrowseMealsInfo = () => {
    const {word} = useParams()
    const [meal,setMeal] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?f=${word}`)
            .then(({data}) => setMeal(data.meals))
    })
    return (
        <div className="container">
        <div className="row">
            {
                meal?.map((oneMeal,index) => (
                    <Link style={{marginRight: 20, textDecoration: 'none',color:'white',marginTop:"20px"}} to={`/meals/${oneMeal.idMeal}`} key={index} className="item-col">
                        <img src={oneMeal.strMealThumb} alt=""/>
                        <p >{oneMeal.strMeal}</p>
                    </Link>
                ))
            }
        </div>
        </div>
    );
};

export default BrowseMealsInfo;