import React from 'react';

import './style.scss';
import { Orbit } from '../Orbit/Orbit';
import { MainPost } from './MainPost';

  
  

const Hero = () => {

     //Плавное появление текста при скролле - когда блок находиться в зоне видимости, то кнему применяеться определенный класс
        function onEntry(entry) {
            entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
            });
        }
    

    React.useEffect(() => {
       

        let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.element-animation');

        for (let elm of elements) {
            observer.observe(elm);
        }
    })


    
   return(
    <section className="hero">
        <div className="hero__container container">
           <MainPost />
           <Orbit />
        </div>
    </section>

   )
}
export { Hero }