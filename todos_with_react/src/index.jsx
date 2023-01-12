import React from 'react';
import ReactDOM from 'react-dom';



import Stats from './components/Stats';
import Search from './components/Search';
import Filters from './components/Filters';
import WhatToDo from './components/WhatToDo';
import ToDos from './components/ToDos';


import './index.css';

class App extends React.Component { //class component https://tproger.ru/translations/react-communication-between-components/

    state = {
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        filterButtonActive: 'all',
        searchPattern: ''
    };

    makeListTasksToShow = () => {
        let searchedTasks = this.state.tasks.filter((task) => task.title.toLowerCase().match(this.state.searchPattern.toLowerCase()) !== null)

        let filteredTasks = []
        if (this.state.filterButtonActive === 'completed') {
            filteredTasks = searchedTasks.filter((task) => task.completed );
        } else if (this.state.filterButtonActive === 'incompleted') {
            filteredTasks = searchedTasks.filter((task) => !task.completed );
        } else {
            filteredTasks = searchedTasks.slice();
        }
        return filteredTasks
    }

    onClickOnFilterButton = (clickedFilterButton) => {
        this.setState({
            filterButtonActive: clickedFilterButton
        })

    }

    onInputInSearch = (typedSearchPattern) => {
        this.setState({
            searchPattern: typedSearchPattern
        })
    }

    handlerUpdatedTasks = (listUpdatedTasks) => {
        localStorage.setItem('tasks', JSON.stringify(listUpdatedTasks));
        this.setState({
            tasks: listUpdatedTasks
        })
    }

    addTaskToStorage = (newTask) => {
        let copy = this.state.tasks.slice();
        copy.push(newTask);
        this.handlerUpdatedTasks(copy)
    }

    render() {
        const {state: {tasks, filterButtonActive}, addTaskToStorage, onClickOnFilterButton, onInputInSearch, handlerUpdatedTasks, makeListTasksToShow} = this;

        return (
            <>
                <div className="app">
                    <Stats tasks={tasks}/>
                    <div className="filters">
                        <Search onInput={onInputInSearch}/>
                        <Filters activeButton={filterButtonActive} updatedActiveButton={onClickOnFilterButton}/>
                    </div>
                    <WhatToDo handleNewTask={addTaskToStorage}/>
                    <ToDos allTasks={tasks} tasksToShow={makeListTasksToShow()} updatedTasks={handlerUpdatedTasks} />
                </div>
                {tasks.length === 0 ? <div className="empty">Дел пока нет</div> : null}
            </>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('#app'));