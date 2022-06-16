import React, { useState } from 'react';
import '../NavBar/index.css'



const NavBar = () => {
    const onScroll = (e) => {
        e.preventDefault()
        let trickShot = document.getElementById("trickShot");
        if (window.scrollY >= 200) {
            trickShot.style.display = "block"
        } else {
            trickShot.style.display = "none"
        }
    };
    window.addEventListener("scroll", onScroll);

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav id="top" className="navbar navbar-expand-sm navbar-light">
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <a id="aboutMe" className="nav-link" href="#about">About Me</a>
                <a className="nav-link" href="#proj">Projects</a>
                <a className="nav-link" href="#skill">Skills</a>
                <a className="nav-link" href="#contact">Contact Info</a>
            </div>
            <a id="trickShot" className="nav-link" href="#top">Back to Top</a>
        </nav>
    );
}



export default NavBar