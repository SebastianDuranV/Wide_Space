import React from 'react';
import logo from './logo.png';
import './App.css';

//<img src={logo} className="App-logo" alt="logo" />

function App() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark  navbar_color">
      <img src={logo} className="App-logo" alt="logo" />
      <a class="navbar-brand" href="/#">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Copyraight 2020 </a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default App;
