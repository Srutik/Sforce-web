import React, { Fragment } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import Services from './Services/Services';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/Product/:id" component={Post} />
      </Router>
    </Fragment>
  );
}

export default App;