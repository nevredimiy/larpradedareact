const Search = () => {
   return(
         <form className="header__search-form search" id="searchform" role="search" method="get" action="#">
            <input className="search__input" id="s" type="search" name="s" autoComplete="off" placeholder="Пошук товарів..." />
            <button className="search__btn btn-reset" type="submit">
                <svg className="search__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </form>
   )
}
export { Search }