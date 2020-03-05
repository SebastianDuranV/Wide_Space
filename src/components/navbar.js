import React from 'react';
import logo from '../style/logo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';

function Navegation() {
    return (
        <div>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark  navbar_color">
                    <img src={logo} className="App-logo" alt="logo" href="/#" />
                    <a class="navbar-brand name" href="/#">
                        WIDESPACE
        </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item navbar_fonts active">
                                <Link class="nav-link" to="./Welcome.js">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item navbar_fonts">
                                <a class="nav-link" href="/#">Features</a>
                            </li>
                            <li class="nav-item navbar_fonts">
                                <a class="nav-link" href="/#">Pricing</a>
                            </li>
                            <li class="nav-item navbar_fonts">
                                <a class="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Copyraight 2020 </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/Welcome.js" component={Welcome} />
            </Router>
        </div>
    );
}

export default Navegation;