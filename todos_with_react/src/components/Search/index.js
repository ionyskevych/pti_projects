import React from 'react';


const Search = (props) => {
    const onClick = (event) => {
        props.onInput(event.target.value)
    }

    return (
        <>
            <input
                className="needle"
                type="text"
                onChange={onClick}
                placeholder="Что будем искать?"
            />
        </>
    );
}

export default Search;