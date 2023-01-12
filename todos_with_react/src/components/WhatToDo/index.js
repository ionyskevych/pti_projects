import React from 'react';

const WhatToDo = (props) => {
    const getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    const addTaskToLocalStorage = (text) => {
        var newTask = {};
        newTask.id = getUniqId();
        newTask.completed = false;
        newTask.important = false;
        newTask.title = text;
        props.handleNewTask(newTask);
    }

    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            addTaskToLocalStorage(e.target.value);
        }
    }

    return (
        <>
            <div className="source">
                <form>
                    <input className="title" type="text" placeholder="Что нужно сделать?" onKeyDown={handlePressEnter}/>
                </form>
            </div>

        </>
    );
}

export default WhatToDo;