import React from 'react';
import {Routes , Route , BrowserRouter} from "react-router-dom";
import Main from "./components/main";
import Categories from "./components/categories";
import Meals from "./components/Meals";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/category/:categoryName' element={<Categories/>} />
            <Route path='/category/meals/:mealsId' element={<Meals/>} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;