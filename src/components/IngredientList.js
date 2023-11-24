import React from "react";
import {Link} from "react-router-dom";
import IngredientPage from "../Pages/IngredientPage";

const IngredientList=({ingredients})=>{
    return(
        <div className={'row'}>
            {
                ingredients.map((ingredients,idx)=>
                    <div className={'col-4'} key={idx+ingredients}>
                        <div className={'box'}>
                            <h5><Link to={`/ingredient/${ingredients}`}>{ingredients}</Link></h5>
                            <img className={'ingredient-img'} src={`https://www.themealdb.com/images/ingredients/${ingredients}.png`} alt=""/>
                        </div>
                    </div>
                )
            }
        </div>

    )
}
export default IngredientList