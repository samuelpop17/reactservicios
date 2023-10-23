import React, { Component } from 'react'
import Collatz from './Collatz'
import { NavLink } from 'react-router-dom'
export default class MenuRutasCollaz extends Component {
    render() {
        return (

            <div>
                <h1>MenuRutasCollaz</h1>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/collatz/14">Collatz 14</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/collatz/21">Collatz 21</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  to="/collatz/32">Collatz 32</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}
