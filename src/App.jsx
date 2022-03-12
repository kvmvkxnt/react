import './App.scss';
import React from 'react';
import Button from './Components/Buttons/Buttons';
import './Components/Header/Header.scss';
import './Components/Main/Main.scss';
import Todo from './Components/Todo/Todo';
import './Components/Footer/Footer.scss';

function App() {
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
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    React.useEffect(() => {
        if (todos.length > 0) {
            document.querySelector('.header__button').classList.add('header__button--active');
        } else {
            document.querySelector('.header__button').classList.remove('header__button--active');
        }
    }, [todos]);

    const handleList = (evt) => {
        const clicked = evt.target;
        if (clicked.matches('.todo__checkbox')) {
            const todoId = Number(clicked.dataset.todoId);
            const filteredTodos = [...todos];
            const editTodo = filteredTodos.find((todo) => todo.id === todoId);
            editTodo.isCompleted = !editTodo.isCompleted;
            clicked.parentNode.nextElementSibling.classList.toggle('todo__task--completed')
            setTodos(filteredTodos);
        } else if (clicked.matches('.todo__delete')) {
            const todoId = Number(clicked.dataset.todoId);
            const filteredTodos = todos.filter((todo) => todo.id !== todoId);
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

    const getTodosByType = type => {
        if (type === 'all') {
            return todos;
        } else if (type === 'active') {
            return todos.filter((todo) => !todo.isCompleted);
        } else if (type === 'completed') {
            return todos.filter((todo) => todo.isCompleted);
        }   
    }

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

    const handleDblClick = evt => {
        const clicked = evt.target;
        
        if (clicked.matches('.todo__task')) {
            if (todos.find((todo) => todo.id === Number(clicked.dataset.todoId)).isCompleted) {
                return;
            } else {
                clicked.classList.add('todo__task--unactive');
                const form = clicked.nextElementSibling;
                form.classList.add('todo__form--active');
                form.querySelector('.todo__input').focus();
            }
        }
    }

    const handleListSubmit = evt => {
        evt.preventDefault();
        const submitted = evt.target;
        
        const todoId = Number(submitted.dataset.todoId);
        const input = submitted.querySelector('.todo__input');
        const newTitle = input.value.trim();

        if (newTitle === '') {
            const filtered = todos.filter((todo) => todo.id !== todoId);
            setTodos(filtered);
        } else {
            const filtered = [...todos];
            const todo = filtered.find((todo) => todo.id === todoId);
            todo.title = newTitle;
            input.value = null;
            submitted.previousElementSibling.classList.remove('todo__task--unactive');
            submitted.classList.remove('todo__form--active');
            setTodos(filtered);
        }

    }
    
    const handleFocusLose = evt => {
        const lost = evt.target;

        if (lost.matches('.todo__input')) {
            lost.parentNode.previousElementSibling.classList.remove('todo__task--unactive');
            lost.parentNode.classList.remove('todo__form--active');
        }
    }

    return (
        <section className='todo-app'>
            <div className="container">
                <h1 className="todo__title">todos</h1>
                <p className='tip__title'>double click on task to edit</p>
                <div className="todo-app__inner">
                    <header className='header'>
                        <div className="header__inner">
                            <button className={'header__button'} onClick={handleFormClick}>❯</button>
                            <form className="header__task" onSubmit={handleSubmit}>
                                <input type="text" className="header__input" placeholder='What needs to be done?' />
                            </form>
                        </div>
                    </header>
                    <main className='main'>
                        <div className="todo_list">
                            <ul className="todo_list__inner" onClick={handleList} onDoubleClick={handleDblClick} onSubmit={handleListSubmit} onBlur={handleFocusLose}>
                                {todos.length > 0 && getTodosByType(type).map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted}/>)}
                            </ul>
                        </div>
                    </main>
                    <footer className='footer'>
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
                </div>
            </div>
        </section>
    );
}

export default App;
