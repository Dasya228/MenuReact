import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePages from "./Pages/HomePages";
import SearchPages from "./Pages/SearchPages";
import MealPage from "./Pages/MealPage";
import Header from "./components/Header";
import Footer from "./components/Footer";



const App = () => {
    return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/search' element={<SearchPages/>}/>
            <Route path='/meal/:idMeal' element={<MealPage/>}/>

        </Routes>
        <Footer/>
    </>
    )
}
export default App