import React, { Component, PropTypes } from 'react';
import { Dom } from 'react-dom';

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="footerwrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>About</h4>
                            <div className="hline-w"></div>
                            <p>Nerwin React-Meteor template for quick start</p>
                        </div>
                        <div className="col-lg-6">
                            <h4>Sites Links</h4>
                            <div className="hline-w"></div>
                            <p>
                                <a href="https://github.com/Nerwin"><i className="fa fa-github"></i></a>
                                <a href="#"><i className="fa fa-reddit"></i></a>
                                <a href="#"><i className="fa fa-stack-overflow"></i></a>
                                <a href="https://www.quora.com/profile/Hippolyte-Lacroix"><i className="fa fa-quora"></i></a>
                                <a href="#"><i className="fa fa-medium"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





















