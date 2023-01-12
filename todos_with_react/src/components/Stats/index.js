import React from "react";

const Stats = function (props) {
    return (
        <>
            <div className="heading">
                <h1>Список дел</h1>
                <h4 className="stats">Осталось
                    <span className="item-incompleted"> {props.tasks.filter((elem) => !elem.completed).length}</span>, готово <span className="item-completed">{props.tasks.filter((elem) => elem.completed).length}</span>
                </h4>
            </div>
        </>
    );
}

export default Stats;