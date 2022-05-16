import React, {useEffect, useState} from 'react';
import {useParams,Link} from "react-router-dom";
import axios from "axios"
import BrowseNavigate from "../../BrowseNavigate";

const Browse = () => {
    const {name} = useParams()
    const [browse,setBrowse] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({data}) =>
                setBrowse(data.meals))
    },[name])
    return (
        <div className="container">
         <div className="row">
             {
                 browse.map((meal) => (
                     <Link style={{marginRight: 20, textDecoration: 'none',color:'white',marginTop:"20px"}} className="item-col" to={`/meals/${meal.idMeal}`}  key={meal.idMeal}>
                         <img src={meal.strMealThumb} alt=""/>
                         <h3 style={{textDecoration:"none"}} >{meal.strMeal}</h3>
                     </Link>
                 ))
             }
         </div>
            <h2 style={{textAlign:"center",color:"white",marginTop:"20px"}}>Browse Meals</h2>
            <BrowseNavigate />
        </div>

    );
};

export default Browse;