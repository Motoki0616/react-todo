import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export class Login extends React.Component {
    constructor (props){
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin(){
        var {dispatch} = this.props;
        dispatch(actions.startLogin());
    }
    render(){
        return (
                <div className="login-box">
                    <div className="title-box">
                        <h1 className="page-title">Todo Application</h1>
                    </div>
                <div className="callout callout-auth">
                    <div className="callout-box">
                    <h3 className="login-title">Login</h3>
                    <p>
                        Login with Github account below.
                    </p>
                    <button className="btn" onClick={this.onLogin}>Login with Github</button>
                    </div>
                </div>
                </div>
        );
    }
};

export default Redux.connect()(Login);
