import React from 'react';
import {Routes , Route , BrowserRouter} from "react-router-dom";
import Main from "./components/main";
import Categories from "./components/categories";
import Meals from "./components/Meals";
import Ingrediends from "./components/ingrediends";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/category/:categoryName' element={<Categories/>} />
            <Route path='/category/meals/:mealsId' element={<Meals/>} />
            <Route path='/category/meals/ingrediend/:ingreName' element={<Ingrediends/>} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;