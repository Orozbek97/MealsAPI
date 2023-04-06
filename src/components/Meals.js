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
                                <div className={'row'}>
                                    <div className={'col-6'}>
                                        <img src={meal.strMealThumb} alt="" width={400} height={300}/>
                                    </div>
                                    <div className={'col-6'}>
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
                                            <h2> Tags : </h2> <h4>{meal.strTags}</h4>
                                        </div>
                                        <div className={'description'}>
                                            <h2> Video : <a href={meal.strYoutube}> YouTube</a> </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className={'ingre'}>
                                    <h2> Ingredients :  </h2>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient1}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient1}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient1}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient2}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient2}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient2}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient3}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient3}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient3}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient4}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient4}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient4}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient5}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient5}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient5}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient6}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient6}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient6}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient7}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient7}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient7}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient8}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient8}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient8}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient9}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient9}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient9}-Small.png`} width={60}/>
                                        </div>
                                    </Link>
                                    <Link to={`/category/meals/ingrediend/${meal.strIngredient10}`} target={"_blank"}>
                                        <div className={'ingrediends'}>
                                            <h5>{meal.strIngredient10}</h5>
                                            <img src={`https://themealdb.com/images/ingredients/${meal.strIngredient10}-Small.png`} width={60}/>
                                        </div>
                                    </Link>

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