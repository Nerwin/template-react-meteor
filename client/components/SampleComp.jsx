import React, { Component, PropTypes } from 'react';

class SampleComp extends Component {

    constructor(props) {
        super(props);
        this.handleCLick = this.handleCLick.bind(this);
    }

    handleCLick(event, instance) {
        event.preventDefault();
        console.log(event.currentTarget.id);
    }

    render() {
        return (
            <div className="card text-center">
                <div className="name-card">SampleComp</div>
                <p className="text-card">{this.props.data.text}</p>
                <div className="group-button">
                    <button className="btn btn-success btn-block" type="button" id={'validate'} onClick={this.handleCLick}>Validate</button>
                </div>
            </div>
        );
    }
}

SampleComp.propTypes = {
};

export default SampleComp;