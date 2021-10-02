import React, { Component } from 'react';
import logo from './header_logo.png';

class LoginPage extends Component {


    render() {
        return (

            <div>
                <h1>POCNIC</h1>
                <div className="imgcontainer">
                    <img src={logo} alt="Avatar" class="avatar" />
                </div>

                <br />
                <br />

                <div className="container">
                    <label ><b>Username</b></label>
                    <input type="text" />
                    <br />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" />
                    <br />
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                </div>

                <div className="container">
                    <button type="button" class="cancelbtn">Cancel</button>

                </div>
            </div>
        )
    }
}

export default LoginPage;