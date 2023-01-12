import React from 'react';

const Todos = ({todos, onImportant, onCompleted, onRemove}) => {
    return (
        <div className="items" id="tasks">
            {
                todos.length ?
                    todos.map((todo) => (
                        <div data-id={todo.id} className={`item ${todo.completed ? 'completed' : ''} ${todo.important ? 'important' : ''}`}>
                            <span className="title" onDoubleClick={() => onCompleted(todo.id)}>{todo.title}</span>
                            <div className="actions">
                                <button onClick={() => onRemove(todo.id)} className="delete">&#10060;</button>
                                <button onClick={() => onImportant(todo.id)} className="important">&#128276;</button>
                            </div>
                        </div>
                    )) :
                    <div className="empty">Дел пока нет</div>
            }
        </div>
    );
};

export default Todos;