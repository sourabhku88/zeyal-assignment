import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookie] = useCookies([]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">Zygal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                    <div className="btn btn-outline-success sm-btn" onClick={setCookie('token','')}> Logout </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header