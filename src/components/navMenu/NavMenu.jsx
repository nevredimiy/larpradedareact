import React from 'react';

import { headerTopMenu } from '../../helpers/headerTopMenu';
import { headerBottomMenu } from '../../helpers/headerBottomMenu';
import { ItemMenu } from './ItemMenu';

import './style.css';

const NavMenu = ({ menuClass }) => {

   function closeAllDropMenu(current = null) {
      let parents = [];      

      if (current) {
         let currentParent = current.parentNode;
        
         while (currentParent) {
            if (currentParent.classList.contains('menu__list')) break;
            if (currentParent.nodeName === 'UL') parents.push(currentParent);
            currentParent = currentParent.parentNode;
         }         
      }
      
      let searchOpenDropMenu = document.querySelectorAll('.show');
      if (searchOpenDropMenu.length > 0) {
         searchOpenDropMenu.forEach(item => {
            if (item !== current && !parents.includes(item)) {
               item.classList.remove('show');
               item.previousElementSibling.classList.remove('rotate-180');
               item.parentElement.classList.remove('bg-l-brown')
            }
         })
      }
   }

   function handleClick(e) {
      
      let itemHasChildren = e.target.closest('.menu-item-has-children');   
            
      
      if (itemHasChildren) {
         itemHasChildren.classList.toggle('bg-l-brown');
         Array.from(itemHasChildren.children).forEach(elem => {
            console.dir(elem)
            if (elem.nodeName === 'svg') {
               elem.classList.toggle('rotate-180');
            }
            if (elem.nodeName === 'UL') {
               closeAllDropMenu(elem);
               elem.classList.toggle('show');               
            }
         })
      }

   }

   let dataMenu = [];

   if (menuClass.includes("header__top-menu")) dataMenu = headerTopMenu;

   if (menuClass.includes("header__bottom-menu")) dataMenu = headerBottomMenu;

   return (
      <nav onClick={handleClick} className={ menuClass } role="navigation" aria-label="Дополнительная навигация">
         <ul className="menu__list list-reset">
            {dataMenu.map((item) => {
                  return <ItemMenu key={item.id} link={item.link} text={item.linkText} dropMenu={item.dropMenu ? item.dropMenu : false} />;
                     })}
         </ul>
      </nav>
   )
}
export { NavMenu }