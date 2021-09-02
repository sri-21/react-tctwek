import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Content from './Content';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Example() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="AppContent">
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route exact path="/Create">
              <Create />
            </Route>
            <Route exact path="/BlogDetails/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default Example;
