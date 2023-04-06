import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Main = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios
            .get('https://themealdb.com/api/json/v1/1/categories.php')
            .then(({data}) => {
                setCategory(data.categories);
            })
    }, []);

    return (
        <div className={'container'}>
            <h1> Meals Category</h1>
            <div className={'row'}>
                {category.map((categories) => (
                    <div key={categories.idCategory} className={'col-4'}>
                        <Link to={`/category/${categories.strCategory}`} target={"_blank"}>
                            <div className={'box'}>
                                <img src={categories.strCategoryThumb} alt=""/>
                                <h3 style={{fontSize:30,
                                            color:"white"
                                }}>{categories.strCategory}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
