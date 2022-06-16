import React from 'react';
import '../FirstPage/index.css'
import AboutMe from '../AboutMe';
import MernStack from '../MernStack/index'
import Projects from '../Projects'
import Skills from '../Skills'
import ContactInfo from '../ContactInfo'


const FirstPage = () => {
    return (
        <div className='intro text-center' >
            <h1 className='title mt-3'>Andraya's Portfolio</h1>
            <MernStack />
            <div className='container mt-5'>
                <AboutMe />
                <Projects />
                <Skills />
                <ContactInfo />
            </div>
        </div>
    )
}

export default FirstPage;