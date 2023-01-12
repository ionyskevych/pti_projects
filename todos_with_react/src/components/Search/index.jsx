import React from 'react';

const Search = ({onSearchChange}) => {
    return (
        <input
            className="needle"
            type="text"
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Что будем искать?"
        />
    );
};

export default Search;