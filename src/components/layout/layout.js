import React from "react"
import Navbar from "./navbar/navbar"

const Layout = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
        <Navbar />
        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="bclick" onClick={() => {
                  document.getElementById("wrapper").classList.toggle("toggled")
                }}></span>
            </nav>
            <div className="container-fluid">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout
