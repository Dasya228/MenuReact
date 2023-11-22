import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import MealList from "../components/MealList";
import Footer from "../components/Footer";
const HomePages = ()=>{
const[meals,setMeals]=useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data})=>setMeals(data.meals))
    }, []);

    return(

        <div>
            <Header/>
            <div className={'container'}>
                <h1>Главное меню</h1>
                <MealList meals={meals}/>
            </div>
            <Footer/>
        </div>
    )
}
export default HomePages