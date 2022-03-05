import './Header.scss';

import PropTypes from 'prop-types';

function Header({isActive}) {
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

Header.propTypes = {
    isActive: PropTypes.bool,
}

Header.defaultProps = {
    isActive: false,
}

export default Header;