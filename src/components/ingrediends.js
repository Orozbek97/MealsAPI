import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Ingrediends = () => {
    const params = useParams()
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios
            .get(`https://themealdb.com/api/json/v1/1/filter.php?i=${params.ingreName}`)
            .then(({data}) => {
                setCategory(data.meals);
            })
    }, []);

    return (
        <div className={'container'}>
            <h1> Meals with {params.ingreName} </h1>
            <div className={'row'}>
                {category.map((meal) => (
                    <div className={'col-4'}>
                        <Link to={`/category/meals/${meal.idMeal}`} target={"_blank"}>
                            <div className={'box'}>
                                <img src={meal.strMealThumb} alt="" width={250}/>
                                <h3 style={{
                                    fontSize: 30,
                                    color: "white"
                                }}>{meal.strMeal}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ingrediends;