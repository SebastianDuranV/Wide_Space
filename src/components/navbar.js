import React from 'react';
import logo from '../style/img/logo.png';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Welcome from './Welcome';
import About from './About';
import Home from './Home';
import Cubiculo1 from './1.js'
//import PageNotFound from './PageNotFound';

function Navegation() {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark  fixed-top navbar_color">
                    <img src={logo} className="App-logo" alt="logo" href="/" />
                    <a className="navbar-brand name" href="/#">
                        WIDESPACE
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item navbar_fonts active">
                                <Link className="nav-link" to="/#">Cubículos <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item navbar_fonts">
                                <a className="nav-link" href="/About">Qué es esto? </a>
                            </li>
                            <li className="nav-item navbar_fonts">
                                <a className="nav-link" href="https://www.uach.cl/" tabIndex="-1" aria-disabled="true"> UACh </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                </main>
            </Router>
        </div>
    );
}
/*<Route path="/404" component={PageNotFound} />
<Redirect to="/404" />*/

export default Navegation;