import React from 'react';
import Todo from '../Todo/Todo';
import './Main.scss';
import {Context as ThemeContext} from '../../Context/Theme';

function Main({todos, setTodos, type}) {
    const ctx = React.useContext(ThemeContext);
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

    const getTodosByType = type => {
        if (type === 'all') {
            return todos;
        } else if (type === 'active') {
            return todos.filter((todo) => !todo.isCompleted);
        } else if (type === 'completed') {
            return todos.filter((todo) => todo.isCompleted);
        }   
    }

    return (
        <main className='main'>
            <div className={`'todo_list ${ctx.theme === 'dark' ? 'todo_list--dark' : ''}`}>
                <ul className="todo_list__inner" onClick={handleList} onDoubleClick={handleDblClick} onSubmit={handleListSubmit} onBlur={handleFocusLose}>
                    {todos.length > 0 && getTodosByType(type).map((todo) => <Todo key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />)}
                </ul>
            </div>
        </main>
    )
}

export default Main;