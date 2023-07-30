import { Link } from 'react-router-dom';

const MainPost = () => {
   return(
       <div className="hero__post element-animation">
            <h1 className="hero__title element-animation">Ювелірні вироби зі срібла</h1>
            <p className="hero__description element-animation">На нашому сайті ви знайдете різноманітні ювелірні прикраси, які
                зроблені у більшості
                зі срібла</p>
            <Link to="" className="hero__btn btn btn-reset inline-block element-animation">Дізнатися більше</Link>
            </div>   
   )
}
export { MainPost }