import React from 'react'
import '../BottomNav/index.css'
import facebook from '../../assets/images/facebook.png'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'

const BottomNav = () => {
    return (
        <nav className="bottomNavbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item w-100">
                        <a className="nav-link" href="#top">Back To Top</a>
                        <div className='links'>
                            <img id='link1' alt='fb' src={facebook} href="#"></img>
                            <img id='link2' alt='gh' src={github} href='#'></img>
                            <img id='link3' alt='li' src={linkedin} href='#'></img>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default BottomNav