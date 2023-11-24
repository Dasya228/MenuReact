import React from "react";

const IngredientList=({ingredients})=>{
    return(
        <div className={'row'}>
            {
                ingredients.map((ingredients,idx)=>
                    <div className={'col-4'} key={idx+ingredients}>
                        <div className={'box'}>
                            <h5>{ingredients}</h5>
                            <img className={'ingredient-img'} src={`https://www.themealdb.com/images/ingredients/${ingredients}.png`} alt=""/>
                        </div>
                    </div>
                )
            }
        </div>

    )
}
export default IngredientList