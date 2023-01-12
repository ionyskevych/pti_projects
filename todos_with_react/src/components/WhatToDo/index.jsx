import React from 'react';

class WhatToDo extends React.Component {

    state = {
        text: ''
    };

    getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    onKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.onCreate({
                id: this.getUniqId(),
                title: e.target.value,
                completed: false,
                important: false
            });

            this.setState({
                text: ''
            });
        }
    };

    onChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        const {state: {text}, onKeyDown, onChange} = this;

        return (
            <div className="source">
                <input value={text} className="title" type="text" placeholder="Что нужно сделать?" onChange={onChange} onKeyDown={onKeyDown} />
            </div>
        );
    }
}

export default WhatToDo;