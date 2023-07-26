import React from 'react';
import { Link } from 'react-router-dom';

import { DropMenu } from './DropMenu';
import { Chevron } from './Chevron';

const ItemMenu = ({ link, text, dropMenu }) => { 
  
  let ClassItemHasChildren = dropMenu ? 'menu-item-has-children' : '';    

  

  return (
      
      <li
      className={'menu__item ' + ClassItemHasChildren}
      >
      <Link className="menu__link" to={dropMenu ? '/#' : link}>{text}</Link>
          {dropMenu && <Chevron />}
          {dropMenu && <DropMenu dropMenu={dropMenu} />}
      </li>   
  )
}
export { ItemMenu }