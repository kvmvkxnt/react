import './Buttons.scss'

import PropTypes from 'prop-types';

function Button({text, id, isActive}) {
    return (
        <button className={`footer__button ${isActive ? 'footer__button--active' : ''}`} id={id}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
}

Button.defaultProps = {
    text: 'All',
    isActive: false,
}

export default Button;