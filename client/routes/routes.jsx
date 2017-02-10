import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import React from 'react';
import { MainLayout } from '/client/main.jsx';
import App from '/client/layouts/App.jsx';
import Connection from '/client/components/Connection.jsx';

FlowRouter.route("/", {
    action() {
        mount(MainLayout, {
            container: () => (<App />)
        });
    }
});

FlowRouter.route("/connection", {
    action() {
        mount(MainLayout, {
            container: () => (<Connection type="connection" />)
        });
    }
});

FlowRouter.route("/register", {
    action() {
        mount(MainLayout, {
            container: () => (<Connection type="register" />)
        });
    }
});