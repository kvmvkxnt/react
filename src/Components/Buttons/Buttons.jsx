import './Buttons.scss'

function Button({text = 'All', id, isActive = false}) {
    return (
        <button className={`footer__button ${isActive ? 'footer__button--active' : ''}`} id={id}>
            {text}
        </button>
    )
}

export default Button;