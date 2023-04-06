import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Meals = () => {
    const params = useParams()
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios
            .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.mealsId}`)
            .then(({data}) => {
                setCategory(data.meals);
            })
    }, []);

    return (
        <div className={'container'}>
            <div className={'meal-page'}>
                {category.map((meal) => (
                    <div  className={'meal-box'}>
                            <div>
                                <img src={meal.strMealThumb} alt="" width={300}/>
                               <div className={'description'}>
                                   <h2> Name : </h2> <h4>{meal.strMeal}</h4>
                               </div>
                                <div className={'description'}>
                                    <h2> Whose : </h2> <h4>{meal.strArea}</h4>
                                </div>
                                <div className={'description'}>
                                    <h2> Category : </h2> <h4>{meal.strCategory}</h4>
                                </div>
                                <div className={'description'}>
                                    <h2> Ingredients : </h2> <p>{meal.strIngredient1} , {meal.strIngredient2} , {meal.strIngredient3} , {meal.strIngredient4} ,
                                    {meal.strIngredient5} , {meal.strIngredient6} , {meal.strIngredient7} , {meal.strIngredient8} , {meal.strIngredient9}</p>
                                </div>
                                <div className={'instructions'}>
                                    <h2> Instructions : </h2> <p>{meal.strInstructions}</p>
                                </div>

                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Meals;