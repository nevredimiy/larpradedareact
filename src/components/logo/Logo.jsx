import sprite from '../../img/sprite.svg';

const Logo = () => {
    return (
            <a className="header__logo-link" href="/" rel="home">
        <svg className="header__logo" role="img" viewBox="0 0 125 30" arial-label="Логотип LarPradeda">
          <use href={sprite +'#logo'}></use>
        </svg>
      </a>
        );
}

export { Logo }