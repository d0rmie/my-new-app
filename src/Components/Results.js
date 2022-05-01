import React from 'react';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>{this.props.result}</h4>
            </div>
        );
    }

}