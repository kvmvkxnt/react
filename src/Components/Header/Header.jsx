import './Header.scss';

function Header({isActive = false}) {
    return (
        <>
            <header className='header'>
                <div className="header__inner">
                    <form className="header__task">
                        <button className={`header__button ${isActive ? 'header__button--active' : ''}`}>❯</button>
                        <input type="text" className="header__input" placeholder='What needs to be done?' />
                    </form>
                </div>
            </header>
        </>
    )
}

export default Header;