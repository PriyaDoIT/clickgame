import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Clicky Game!</a>
                </div>
                <div className="nav navbar-nav ml-auto score">
                    {props.correct}
                    </div>
                <div className="nav navbar-nav ml-auto score">
                    Score: {props.score} | Top: {props.top}
                    </div>
            </div>
        </nav>


    </div>
);



export default Navbar;
