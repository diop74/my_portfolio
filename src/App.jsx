 /**
  * @copyright 2024 oumarcode
  * @license Apache-2.0
  */
 import React from 'react';
 import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Skill from './components/skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
 

gsap.registerPlugin(useGSAP,ScrollTrigger);
 const App = () => {
    
    return (
        <ReactLenis root>
            <Header/>
        <main>
            <Profile/>
            <About/>
            <Skill/>
            <Work/>
            <Contact/>
            

        </main>
        <Footer/>
        </ReactLenis>
         
    );
 }
 
 export default App;
 