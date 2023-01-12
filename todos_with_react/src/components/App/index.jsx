import React from 'react';

import Stats from '../Stats';
import Search from '../Search';
import Filters from '../Filters';
import WhatToDo from '../WhatToDo';
import Todos from '../Todos';

class App extends React.Component { //class component https://tproger.ru/translations/react-communication-between-components/

    state = {
        tasks: [],
        filter: 'all',
        searchText: ''
    };

    getTodosFromStorage() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    setTodosToStorage(todos) {
        localStorage.setItem('tasks', JSON.stringify(todos));
    }

    componentDidMount() {
        this.setState({
            tasks: this.getTodosFromStorage()
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks) {
            this.setTodosToStorage(this.state.tasks);
        }
    }

    getFilteredTodos = () => {
        const {tasks, searchText, filter} = this.state;

        return tasks
            .filter((task) => task.title.toLowerCase().includes(searchText.toLowerCase()))
            .filter((task) => {
                if (filter === 'completed') {
                    return task.completed;
                } else if (filter === 'incompleted') {
                    return !task.completed;
                } else {
                    return true;
                }
            });
    };

    onFilterChange = (filter) => {
        this.setState({
            filter
        })
    };

    onSearchChange = (searchText) => {
        this.setState({
            searchText
        })
    };

    onCreate = (task) => {
        this.setState((state) => ({
            tasks: [
                ...state.tasks,
                task
            ]
        }));
    };

    onImportant = (id) => {
        this.setState((state) => ({
            tasks: state.tasks.map((task) => {
                return task.id === id ?
                    {
                        ...task,
                        important: !task.important
                    } :
                    task
            })
        }));
    };

    onCompleted = (id) => {
        this.setState((state) => ({
            tasks: state.tasks.map((task) => {
                return task.id === id ?
                    {
                        ...task,
                        completed: !task.completed
                    } :
                    task
            })
        }));
    };

    onRemove = (id) => {
        this.setState((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        }));
    };

    render() {
        const {state: {tasks, filter}, getFilteredTodos, onCreate, onFilterChange, onSearchChange, onImportant, onCompleted, onRemove} = this;

        const todoCount = tasks.filter((task) => !task.completed).length;
        const completedCount = tasks.filter((task) => task.completed).length;

        return (
            <div className="app">
                <Stats todoCount={todoCount} completedCount={completedCount} />
                <div className="filters">
                    <Search onSearchChange={onSearchChange}/>
                    <Filters filter={filter} onFilterChange={onFilterChange} />
                </div>
                <WhatToDo onCreate={onCreate} />
                <Todos todos={getFilteredTodos()} onImportant={onImportant} onCompleted={onCompleted} onRemove={onRemove} />
            </div>
        );
    }
}

export default App;