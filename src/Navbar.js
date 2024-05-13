import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";
export class Navbar extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div >
        <nav className="navbar fixed-top navbar-expand-lg my-0" style={{ backgroundColor: "#808080", height:60}}>
{/* // ,position: "fixed",zIndex:"1" ,width:"100%" */}
  <div className="container-fluid" >
  <a className="navbar-brand active" href="#" style={{ color: "white",marginTop: "0px" }}>NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item"><a className="nav-link " style={{color:"white"}} href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link " style={{color:"white"}} href="/business">Business</a></li>
        <li className="nav-item"><a className="nav-link " style={{color:"white"}} href="/entertainment">Entertainment</a></li> 
        <li className="nav-item"> <a className="nav-link " style={{color:"white"}} href="/health">Health</a></li>
        <li className="nav-item"><a className="nav-link " style={{color:"white"}} href="/science">Science</a></li>
         <li className="nav-item"><a className="nav-link " style={{color:"white"}} href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:"white"}} href="/technology">Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    )
  }
}

export default Navbar
