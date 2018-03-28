import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Home from './components/pages/home';
import AboutMe from './components/pages/aboutme';
import Contact from './components/pages/contact';

// styling
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={AboutMe}/>
        <Route exact path='/contact' component={Contact}/>
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
