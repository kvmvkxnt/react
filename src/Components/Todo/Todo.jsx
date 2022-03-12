import './Todo.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Todo({title, id, isCompleted}) {
    return (
        <>
            <li className="todo__item" data-todo-id={id}>
                <label className="todo__checker">
                    <input type="checkbox" className='todo__checkbox visually-hidden' data-todo-id={id} defaultChecked={isCompleted}/>
                    <span className="todo__check"></span>
                </label>
                <p className={`todo__task ${isCompleted ? 'todo__task--completed' : ''}`}>{title}</p>
                <button className="todo__delete" data-todo-id={id}>×</button>
            </li>
        </>
    )
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool,   
}

Todo.defaultProps = {
    isCompleted: false,
}

export default Todo;