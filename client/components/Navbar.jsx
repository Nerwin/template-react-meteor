import React, { Component, PropTypes } from 'react';
import { Dom } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">React-Meteor Boilerplate</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-left">
                            <li><a href="#"></a><i className="fa fa-home fa-1"> Home</i></li>
                            <li><a href="#"></a><i className="fa fa-info-circle fa-1"> Présentation</i></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="register"><i className="fa fa-user fa-1"> Sign Up</i></a></li>
                            <li><a href="connection"><i className="fa fa-sign-in fa-1"> Login</i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}