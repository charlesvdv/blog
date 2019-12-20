import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/about.scss"

const AboutPage = () => (
    <Layout className="about-container">
        <SEO title="About" />
        <div className="about-content">
            <p>
                Hey! I am Charles Vandevoorde, a software engineer from Brussels, Belgium.
                I am an avid learner and love tinkering on various subjects related to 
                computer science and software engineering. Professionally, I am a backend 
                software engineer but, I also like to mess around with infrastructure, frontend 
                technologies and distributed systems.
            </p>
            <p>
                On top of my passion for IT, I also do various sports. I swim and 
                run regularly. I also practice a martial art 
                called <a href="https://sites.google.com/view/wajutsu/">Wa-Jutsu</a> focused on 
                the mastering of the body and the mind.
            </p>
            <h2>Contact and socials</h2>
            <p>
                You can contact me via email at <i>charles@&lt;my domain name&gt;</i> or you 
                can find me on various social platforms such 
                as <a href="https://www.linkedin.com/in/charlesvdv/">LinkedIn</a> or <a href="https://github.com/charlesvdv">Github</a>.
            </p>
            <h2>Disclaimer</h2>
            <p>
                This is my personal website. The views expressed on here are mine alone and does not
                reflect the view of my past or current employer.
            </p>
            <p>
                The code of this website can be found on <a href="https://github.com/charlesvdv/blog">Github</a> and
                is <a href="https://opensource.org/licenses/MIT">MIT licensed</a>. The content of this website 
                is licensed as <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode">CC BY-NC-SA 4.0</a> (Creative 
                Commons Attribution-NonCommercial-ShareAlike 4.0 International).
            </p>
        </div>
    </Layout>
)

export default AboutPage