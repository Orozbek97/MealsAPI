import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Categories = () => {
    const params = useParams()
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios
            .get(`https://themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
            .then(({data}) => {
                setCategory(data.meals);
            })
    }, []);

    return (
        <div className={'container'}>
            <div className={'row'}>
                {category.map((meal) => (
                    <div className={'col-4'}>
                        <Link to={`/category/meals/${meal.idMeal}`}>
                            <div className={'box'}>
                                <img src={meal.strMealThumb} alt="" width={250}/>
                                <h3 style={{fontSize:30,
                                    color:"white"
                                }}>{meal.strMeal}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Categories;