import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation () {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/background">Background</Link>
            <Link to="/character">Character</Link>
            <Link to="/practice">Practice</Link>
        </div>
    );
}

export default Navigation;