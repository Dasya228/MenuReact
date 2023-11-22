import React from "react";
import {Link} from "react-router-dom";
import Logo from '../image/logo2.png'


const Header = ()=>{
    return(
        <header>
            <a href="/"> <img src={Logo} alt=""/></a>
         <nav>
             <Link to={'/'} className={'link_title'}>Главное</Link>
             <Link to={'/search'} className={'link_title'}>Найти блюдо</Link>
         </nav>
        </header>
    )
}
export default Header