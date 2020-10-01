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
import { Carousel } from "react-bootstrap";
import Sidebar from './components/Sidebar';
import CarouselImg1 from "./assets/images/img-1.webp";
import CarouselImg2 from "./assets/images/img-3.webp";
import CarouselImg3 from "./assets/images/img-4.webp";
import Newsdesc from './components/Newsdesc';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="carousel-div">
          <Carousel
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
            <Carousel.Item>
              <div className="carousel-img">
                <img src={CarouselImg1} alt="images" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img src={CarouselImg2} alt="images" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-img">
                <img src={CarouselImg3} alt="images" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
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
