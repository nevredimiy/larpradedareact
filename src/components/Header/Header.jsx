import React, { useState } from "react";

import { NavMenu } from "../navMenu/NavMenu";
import { Logo } from "../logo/Logo";
import { Search } from "../search/Search";
import { Burger } from "./Burger";
import { MiniCart } from "./MiniCart";

import './style.css';

const Header = () => {

    const [burgerClass, setBurgerClass] = useState("burger btn-reset header__burger");
    const [menuClass, setMenuClass] = useState("header__bottom-menu menu");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    //toggle burger and menu change

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger btn-reset header__burger burger--active")
            setMenuClass("header__bottom-menu menu menu--active")
        }
        else {
            setBurgerClass("burger btn-reset header__burger")
            setMenuClass("header__bottom-menu menu")
        }
        setIsMenuClicked(!isMenuClicked)
    }


   return(
        <header className="header fixed-block">
            <div className="container">
                <div className="header__top">
                    <Logo />
                    <NavMenu menuClass="header__top-menu menu"  />
                    <Search />
                    <Burger burgerClass={burgerClass} onClick={updateMenu || false} />
                </div>
                <div className="header__bottom">
                    <NavMenu menuClass={menuClass}  />
                <MiniCart />
                </div>
            </div>
        </header>  
   )
}
export { Header }