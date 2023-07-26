import React from 'react';

import { ItemMenu } from './ItemMenu';

const DropMenu = ({ dropMenu}) => {  
    
    
    return (
       <>
            <ul className="menu__sub-list sub-menu list-reset">
                
                {dropMenu.map(item => {
                    return <ItemMenu key={item.id} link={item.link} text={item.linkText} dropMenu={item.dropMenu ? item.dropMenu : false} />;
                })}
                
            </ul>
        </>
   )
}
export { DropMenu }