import React, { Component, PropTypes } from 'react';
import { Dom } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        $(".navi li").on("click", function () {
            $("li.active").removeClass("active");
            $(this).addClass("active");
        });

        return (
            <div className="ui-navbar">
                <ul className="navi">
                    <li className="active"><a href="/" ><i className="fa fa-home"></i><span>Home</span></a></li>
                    <li><a href="section1" ><i className="fa fa-user"></i><span>Section1</span></a></li>
                    <li><a href="section2" ><i className="fa fa-history"></i><span>Section2</span></a></li>
                    <li><a href="Section3" ><i className="fa fa-line-chart"></i><span>Section3</span></a></li>
                    <li><a href="connection" ><i className="fa fa-download"></i><span>Connection</span></a></li>
                </ul>
                <div className="clearfix"></div>
            </div>
        )
    }
}