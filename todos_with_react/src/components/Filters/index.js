import React from "react";

const Filters = (props) => {
    return (
        <>
            <div className="actions">
                <button data-filter="all" className={props.activeButton === 'all' ? 'active' : ''} onClick={() => props.updatedActiveButton("all")} >Все</button>
                <button data-filter="incompleted" className={props.activeButton === 'incompleted' ? 'active' : ''} onClick={() => props.updatedActiveButton("incompleted")}>Незавершенные</button>
                <button data-filter="completed" className={props.activeButton === 'completed' ? 'active' : ''} onClick={() => props.updatedActiveButton("completed")}>Завершенные</button>
            </div>
        </>
    );
}

export default Filters;