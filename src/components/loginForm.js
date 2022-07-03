import React from 'react';
import Submit from './submit.js';

let e = React.createElement;

export default class Navbar extends React.Component {
    render() {
        return( 
        <div className="card">
            
            <br/>
            <form>
                <label>
                <input type="text" className="inputform" placeholder="Username" />
                </label>
            </form>

            <form>
                <label>
                <input type="text" className="inputform" placeholder="Password"/>
                </label>
            </form>
            <Submit/>
        </div>
        );
    }
}