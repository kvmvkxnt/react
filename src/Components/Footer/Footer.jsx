import React from 'react';
import Button from '../Buttons/Buttons';
import { Context as ThemeContext } from '../../Context/Theme';
import './Footer.scss';

function Footer({todos, setTodos, setType}) {
    const handleFilter = evt => {
        const clicked = evt.target;
        if (clicked.matches('.footer__clear')) {
            const filtered = todos.filter((todo) => !todo.isCompleted);
            setTodos(filtered);
        }
        if (clicked.matches('#all')) {setType('all');}
        if (clicked.matches('#active')) {setType('active');}
        if (clicked.matches('#completed')) {setType('completed');}
    }

    const ctx = React.useContext(ThemeContext);

    return (
        <footer className={`footer ${ctx.theme === 'dark' ? 'footer--dark' : ''}`}>
            <div className="footer__inner" onClick={handleFilter}>
                <p className="footer__left">{todos.filter((todo) => !todo.isCompleted).length} items left</p>
                <div className="footer__buttons">
                    <Button id='all' />
                    <Button text='Active' id='active' />
                    <Button text='Completed' id='completed' />
                </div>
                <button className={`footer__clear ${todos.filter((todo) => todo.isCompleted).length > 0 ? 'footer__clear--active' : ''}`}>Clear completed</button>
            </div>
        </footer>
    )
}

export default Footer;