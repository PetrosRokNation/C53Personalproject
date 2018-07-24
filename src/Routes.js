import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';

const Routes = (props) => (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    {/*  <a className="navbar-brand mr-left" href="#">Petros Rock National</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                    <ul className="navbar-nav mr-right">
                        <li className="nav-item">
                            {props.isLoggedIn || <Link className="nav-link" to="/register">Sign Up</Link>}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
        </div>
    </Router>
);

export default Routes
