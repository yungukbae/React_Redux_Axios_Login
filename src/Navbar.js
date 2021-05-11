import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2>The blog</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New blog</Link>
            </div>
        </nav>
      
    )
}
