import React, { PropTypes, Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import SampleComp from '/client/components/SampleComp.jsx';
import Navbar from '/client/components/Navbar.jsx';
import Footer from '/client/components/Footer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillUpdate(nextProps, nextState) {
    }

    renderComponent() {
        if (typeof this.props.data != "undefined")
            return this.props.data.map(function (data, index) {
                return <SampleComp key={data._id} data={data} />
            });
    }

    render() {
        return (
            <div className="container">
                <Navbar />
                <div id="displayData">
                    <div className="container">
                        <div className="row centered">
                            <div className="col-md-4">
                                <i className="fa fa-heart-o"></i>
                                <h4>Item 1</h4>
                                <p>Here is my text</p>
                                <p><br /><a href="#" className="btn btn-theme">More Info</a></p>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-flask"></i>
                                <h4>Item 2</h4>
                                <p>Here is my text</p>
                                <p><br /><a href="#" className="btn btn-theme">More Info</a></p>
                            </div>
                            <div className="col-md-4">
                                <i className="fa fa-trophy"></i>
                                <h4>Item 3</h4>
                                <p>Here is my text</p>
                                <p><br /><a href="#" className="btn btn-theme">More Info</a></p>
                            </div>
                        </div>
                        {/*<div className="row centered">
                            {this.renderComponent()}
                        </div>*/}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default createContainer(() => {
    console.log("Layout App Created");

    if (SampleCollec.find().count() < 1)
        SampleCollec.insert({ text: "Here is my component text" });

    return {
        data: SampleCollec.find().fetch(),
    };
}, App);