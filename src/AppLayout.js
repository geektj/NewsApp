import React from 'react';
import './App.css';
import './assets/sass/style.scss';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Demo from './components/Demo';
import Header from './components/Header';
// import { Carousel } from "react-bootstrap";
import Carousels from "./components/Carousels"
import Sidebar from './components/Sidebar';
import Newsdesc from './components/Newsdesc';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousels />
        <div className="body-div">
          <div className="body-div-inner">
            <Sidebar />
            <Router>
              <Switch>
                <Route path="/desc">
                  <Newsdesc />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
