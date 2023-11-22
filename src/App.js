import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePages from "./Pages/HomePages";
import SearchPages from "./Pages/SearchPages";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/search' element={<SearchPages/>}/>
        </Routes>
    )
}
export default App