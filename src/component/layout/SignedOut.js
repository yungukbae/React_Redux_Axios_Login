import React from 'react';
import { NavLink } from 'react-router-dom'


const SignedIn = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>SignUp</NavLink></li>
            <li><NavLink to='/'>Log in</NavLink></li>
        </ul>
    )
}

export default SignedIn