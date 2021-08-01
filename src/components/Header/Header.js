import React from 'react'
import logo from '../../Assets/logo.svg';
import './Header.css';
export default function Header() {
    return (
    <div>
        <nav>
          <div className="navs">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>my contact app</h1>
          </div>     
       </nav> 
    </div>
    )
}
