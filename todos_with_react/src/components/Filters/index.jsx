import React from 'react';

const Filters = ({filter, onFilterChange}) => {
    return (
        <div className="actions">
            <button data-filter="all" className={filter === 'all' ? 'active' : ''} onClick={() => onFilterChange('all')} >Все</button>
            <button data-filter="incompleted" className={filter === 'incompleted' ? 'active' : ''} onClick={() => onFilterChange('incompleted')}>Незавершенные</button>
            <button data-filter="completed" className={filter === 'completed' ? 'active' : ''} onClick={() => onFilterChange('completed')}>Завершенные</button>
        </div>
    );
};

export default Filters;