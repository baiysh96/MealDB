import React, {useState} from 'react';
 import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Spinner from "../Spinner";

const Ingredients = () => {
    const [ingredients,setIngredients] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const {slug} = useParams()
useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${slug}`)
        .then((res) =>{
            setIngredients(res.data)
            setIsLoading(false)
        })

},[slug])
    if(isLoading){
        return <Spinner />
    }
  return (
      <div className="container">
          <Link
              to={`/`}><button
              className="btn element-btn" >Back</button> </Link>
          <div className="row">
              <div  className="col-3">
                  <h2 className="meal-title">{slug}</h2>
                  <img src={`https://www.themealdb.com/images/ingredients/${slug}.png`} alt=""/>
                  <Link
                      to={`/latestMeals/${slug}`}><button
                      className="btn element-btn" >Go Next</button> </Link>
              </div>
              <div className="col-8">
                  <h2 className="meal-title">Meals</h2>
          <div className="row">
              {
                  ingredients.meals.map((ingredient,index) => (
                      <Link style={{paddingLeft: 13, textDecoration: 'none',color:'white'}}  to={`/meals/${ingredient.idMeal}`} key={index} className="item-col">
                          <img src={`${ingredient.strMealThumb}`} width="100%" alt=""/>
                          <h4 className="element-title">{ingredient.strMeal}</h4>
                      </Link>
                  ))
              }
          </div>

       </div>
          </div>


      </div>

  )
};

export default Ingredients;