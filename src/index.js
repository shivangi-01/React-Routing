import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  Route,browserHistory,Link,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import About from './About';
const routing=(
  <Router>
        <div>
          <ul>
              <li>
              <Link to="/Home">Home</Link>
              </li>
           </ul>
             
           <ul>
             <li>
             <Link to="/About">About</Link>
             </li>
            </ul>
            <Route path = "/ "component = {App} />
            <Route path = "/home" component = {Home} />
           <Route path = "/about" component = {About} />
         </div>
  </Router>
)

// ReactDOM.render((
//   <Router  history={browserHistory}>
//      <Route path = "/" component = {App}>
//         {/* <IndexRoute component = {Home} /> */}
//         <Route path = "home" component = {Home} />
//         <Route path = "about" component = {About} />
//      </Route>
//   </Router>
// ), document.getElementById('root'));
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
