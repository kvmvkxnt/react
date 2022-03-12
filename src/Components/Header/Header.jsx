import React from 'react';
import './Header.scss';
import {Context as ThemeContext} from '../../Context/Theme';

function Header({todos, setTodos}) {
    const ctx = React.useContext(ThemeContext);
    const handleFormClick = () => {
        const actives = todos.filter((todo) => !todo.isCompleted).length;
        if (actives > 0) {
            const filteredTodos = [...todos];
            filteredTodos.forEach((todo) => {
                todo.isCompleted = true;
            })
            document.querySelectorAll('.todo__checkbox').forEach((checkbox) => {
                checkbox.checked = true;
            })
            setTodos(filteredTodos);
        } else if (actives <= 0) {
            const filteredTodos = [...todos];
            filteredTodos.forEach((todo) => {
                todo.isCompleted = false;
            })
            document.querySelectorAll('.todo__checkbox').forEach((checkbox) => {
                checkbox.checked = false;
            })
            setTodos(filteredTodos);
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const title = form.querySelector('.header__input');
        if (title.value.trim()) {
            const newTodo = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                title: title.value.trim(),
                isCompleted: false,
            }

            title.value = null;
            setTodos([...todos, newTodo]);
        }
    }

    return (
        <header className={`header ${ctx.theme === 'dark' ? 'header--dark' : ''}`}>
            <div className="header__inner">
                <button className={'header__button'} onClick={handleFormClick}>❯</button>
                <form className="header__task" onSubmit={handleSubmit}>
                    <input type="text" className="header__input" placeholder='What needs to be done?' />
                </form>
            </div>
        </header>
    )
}

export default Header;