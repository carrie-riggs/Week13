import React from 'react';
import Submit from './submit.js';
import Navbar from'./navbar.js';
import LoginForm from './loginForm.js';

export default class Page extends React.Component {
    render() {
        return( <div>
            <Navbar />
            <LoginForm />
            </div>
        );
    }
}