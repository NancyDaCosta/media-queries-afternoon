import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      showNav: false,
    }
  }
  toggleNav() {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  render() {
    return (
      <section className="App">
        <header>
          <nav>
            <h2 className="navbar-brand">Start Bootstrap</h2>
              <div className="good-burger" onClick={() => this.toggleNav()}>
              <strong>MENU</strong>
                <div className="ingredients">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="nav-menu">
                <h3>SERVICES</h3>
                <h3>PORTFOLIO</h3>
                <h3>ABOUT</h3>
                <h3>TEAM</h3>
                <h3>CONTACT</h3>
              </div>
          </nav>
        </header>
        <div className={this.state.showNav ? 'show-nav mobile-nav' : 'mobile-nav'}>
          <div className="mobile-nav-content">
            <h3>SERVICES</h3>
            <h3>PORTFOLIO</h3>
            <h3>ABOUT</h3>
            <h3>TEAM</h3>
            <h3>CONTACT</h3>
          </div>
        </div>

        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
            Welcome to Our Studio!
            </div>
            <div className="intro-heading text-uppercase">
            IT'S NICE TO MEET YOU
            </div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">TELL ME MORE</a>
          </div>
        </div>
      </section>

      // <section id="services">
      //   <div className="container">
      //     <div className="row">
      //     </div>
      //   </div>

      // </section>
    );
  }
}

export default App;
