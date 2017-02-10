import { Meteor } from 'meteor/meteor';
import React, { PropTypes, Component } from 'react';

export default class Connection extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleConnection = this.handleConnection.bind(this);
        this.state = { login: "", email: "", password: "", confirmation: "", };
    }

    handleRegister(event, instance) {
        event.preventDefault();
        let login = this.state.login;
        let email = this.state.email;
        let password = this.state.password;
        let confirmation = this.state.confirmation;

        if (password === confirmation) {
            Meteor.call('userRegister', { login: login, email: email, password: password }, function (err, result) {
                console.log("userRegister called");
            });
        } else
            console.log("mauvaise confirmation : ", password + " - ", confirmation);

    }

    handleConnection(event, instance) {
        event.preventDefault();

        let email = this.state.email;
        let password = this.state.password;

        Meteor.loginWithPassword(email, password, function (error) {
            console.log("connection with loginWithPassword");
            if (error == 'undefined')
                console.log("you are connected");
        });
    }

    render() {
        if (this.props.type == "connection") {
            return (
                <div className="container animated zoomIn">
                    <div className="card">
                        <div className="login-form">
                            <div className="form-group">
                                <input type="text" className="form-control login-field" value={this.state.login} placeholder="Enter your username or email" id="login-name" />
                                <label className="login-field-icon fui-user"></label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control login-field" value={this.state.password} placeholder="Password" id="login-pass" />
                                <label className="login-field-icon fui-lock"></label>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block sign-in" onClick={this.handleConnection}>Se connecter</button>
                            <a className="login-link" href="/register">Pas encore de compte ?</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container animated zoomIn">
                    <div className="card">
                        <div className="login-form">
                            <div className="form-group">
                                <input type="text" className="form-control login-field" value={this.state.login} placeholder="Username" id="register-name" />
                                <label className="login-field-icon fui-user"></label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control login-field" value={this.state.email} placeholder="Enter your email" id="register-email" />
                                <label className="login-field-icon fui-user"></label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control login-field" value={this.state.password} placeholder="Password" id="register-pass" />
                                <label className="login-field-icon fui-lock"></label>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control login-field" value={this.state.confirmation} placeholder="Password confirmation" id="register-pass-confirm" />
                                <label className="login-field-icon fui-lock"></label>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block sign-in register" onClick={this.handleRegister}>Inscription</button>
                            <a className="login-link" href="/connection">Page de connexion ?</a>
                        </div>
                    </div>
                </div>
            );
        }
    }
}