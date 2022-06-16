import React, { useEffect } from 'react'
import './index.css'
import scatter from '../../assets/images/scatter.PNG'


const Projects = () => {
    let myIndex = 0;
    useEffect(() => {
        carousel();
    })
    function carousel() {
        let i;
        let x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;

        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 5000);
    }

    return (
        <div>
            <div>
                <h3 className='proj mt-5' id='proj'>Projects</h3>
            </div>
            <div className="container-flex">
                <p className='projInfo'> The Arizona tourist site was built using HTML and CSS. Media queries were used to ensure mobile responsiveness.<br /> D3 and Bootstrap were used to build the Scatter plot.<br /> The Exercise tracker was built using Mongoose, Express, Node.js, HTML, and CSS.</p>
            </div>
            <div className="pictures mt-5">
                <img id='pic1' alt='HTML/CSS' className="mySlides w3-animate-fading" src="./images/arizonaTourist.png" style={{ width: "100%" }} />
                <img id='pic2' alt='D3' className="mySlides w3-animate-fading" src={scatter} style={{ width: "100%" }} />
                <img id='pic3' alt='Mongoose/MongoDB/Node.js/Express' className="mySlides w3-animate-fading" src="./images/exerciseTracker.png" style={{ width: "100%" }} />
            </div>
        </div>
    )
}





export default Projects