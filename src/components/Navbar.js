
import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AddUser from "./AddUser";


function Navbar (){

    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div className="Nav">
          <Router>
            <div>
              <ul>
                
                <li>
                  <Link to="/AddUser">Add User</Link>
                </li>
                <li>
                  <Link to="/">close</Link>
                </li>
              </ul>
              <Route path="/" />
              <Route path="/AddUser" component={AddUser} />
              
            </div>
          </Router>
        </div>
        </nav>
      );
}


export default Navbar;