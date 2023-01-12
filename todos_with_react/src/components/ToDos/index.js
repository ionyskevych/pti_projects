import React from "react";

const ToDos = (props) => {

    const updateStorage = (listUpdatedTasks) => {
        // adds to App updated tasks
        // localStorage.setItem('tasks', JSON.stringify(listUpdatedTasks));
        props.updatedTasks(listUpdatedTasks);
    }

    const setTaskImportantEvent = (item) => {
        // changed "important tasks" to "!important tasks" and adds to App updated tasks
        // щоб там їх спеціальна функція зберегла в Сторедж
        var copy = props.allTasks.slice();
        props.allTasks.map((elem, idx) => {
            if (elem.id === item.id) {
                copy[idx].important = !copy[idx].important
            }
        })
        updateStorage(copy)
    }

    const deleteTaskEvent = (item) => {
        var copy = props.allTasks.filter((element) => element.id !== item.id )
        updateStorage(copy)
    }

    const setTaskCompleted = (item) => {
        // changed "completed tasks" to "!completed tasks" and adds to App updated tasks
        // щоб там їх спеціальна функція зберегла в Сторедж
        var copy = props.allTasks.slice();
        props.allTasks.map((elem, idx) => {
            if (elem.id === item.id) {
                copy[idx].completed = !copy[idx].completed
            }
        })
        updateStorage(copy)
    }

    return (
        <>
            <div className="items" id="tasks">
                {props.tasksToShow.map((item) => {
                    return <div
                        data-id={item.id}
                        className={`item ${item.completed ? 'completed' : ''} ${item.important ? 'important' : ''}`}>
                        <span className="title" onDoubleClick={() => (setTaskCompleted(item))}>{item.title}</span>
                        <div className="actions">
                            <button onClick={() => {deleteTaskEvent(item)}} className="delete">&#10060;</button>
                            <button onClick={() => {setTaskImportantEvent(item)}} className="important">&#128276;</button>
                        </div>
                    </div>
                })}
            </div>
        </>
    );
}

export default ToDos;