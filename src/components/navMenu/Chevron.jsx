import sprite from '../../img/sprite.svg';

const Chevron = () => {
   return(
         <svg className="menu-item-has-children__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <use href={sprite + "#chevron"}></use>
        </svg> 
   )
}
export { Chevron }