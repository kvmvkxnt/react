import './App.scss';
import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {Context as ThemeContext} from './Context/Theme';

function App() {
    const ctx = React.useContext(ThemeContext);
    const [todos, setTodos] = React.useState(JSON.parse(window.localStorage.getItem('todos')) || [{
        id: 0,
        title: 'Do something',
        isCompleted: false,
    }]);

    const [type, setType] = React.useState(window.localStorage.getItem('type') || 'all');

    React.useEffect(() => {
        window.localStorage.setItem('type', type);
    }, [type]);

    React.useEffect(() => {
        window.localStorage.setItem('theme', ctx.theme);
    }, [ctx.theme]);

    React.useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    React.useEffect(() => {
        if (todos.length > 0) {
            document.querySelector('.header__button').classList.add('header__button--active');
        } else {
            document.querySelector('.header__button').classList.remove('header__button--active');
        }
    }, [todos]);

    return (
        <section className={`todo-app ${ctx.theme === 'dark' ? 'todo-app--dark' : ''}`}>
            <div className="container">
                <h1 className="todo__title">todos</h1>
                <p className='tip__title'>double click on task to edit</p>
                <select id="theme_switch" onChange={(evt)=>{
                    ctx.setTheme(evt.target.value);
                }}>
                    <option value="dark" selected={ctx.theme === 'dark' ? true : false}>Dark</option>
                    <option value="light" selected={ctx.theme === 'light' ? true : false}>Light</option>
                </select>
                <div className="todo-app__inner">
                    <Header todos={todos} setTodos={setTodos} />
                    <Main todos={todos} setTodos={setTodos} type={type} />
                    <Footer todos={todos} setTodos={setTodos} setType={setType} />
                </div>
            </div>
        </section>
    );
}

export default App;
