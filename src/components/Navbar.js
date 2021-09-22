
import React, { useState} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AddAndRemove from "./AddAndRemove";


function Navbar (){

    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div className="Nav">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/AddAndRemove">Add & Remove</Link>
                </li>
               
              </ul>
              <Route path="/" />
              <Route path="/AddAndRemove" component={AddAndRemove} />
              
            </div>
          </Router>
        </div>
        </nav>
      );
}


export default Navbar;