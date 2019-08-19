import './App.css';
import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Router, Route, Link } from 'react-router'

import test from '../src/components/test/index';   //注意这个引入路径
import page2 from '../src/components/page2/index';   //注意这个引入路径
import page3 from '../src/components/page3/index';   //注意这个引入路径
import slider from '../src/components/slider/index'

//https://www.blyoo.com/4106.html  ：解决'Link' is not exported from 'react-router'.
// var CommentBox = React.createClass({}); //不支持这个方法了

// function CommentBox() {
//   return <h2>Home</h2>;
// }

// class CommentBox extends React.Component { 
//   render () {
//     return (
//       <div>
//         Hello, world! I am a CommentBox.
//         </div>
//     );
//   }
// }

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="headernav">reactApp</nav>

        <Route path="/" exact component={slider} />
        <Route path="/about/" component={page2} />
        <Route path="/users/" component={page3} />
        <Route path="/test/" component={test} />

        <div className="footernav">
          <ul>
            <li>
              <Link to="/">page1</Link>
            </li>
            <li>
              <Link to="/about/">page2</Link>
            </li>
            <li>
              <Link to="/users/">page3</Link>
            </li>
            <li>
              <Link to="/test/">page4</Link>
            </li>
          </ul>
        </div>
      </div>

    </Router>
  );
}

export default AppRouter;