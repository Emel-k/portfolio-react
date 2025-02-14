import React from 'react';
import {Link} from "react-router-dom";
import "../src/styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer FontAwesomeIcon
import { faGithub } from '@fortawesome/free-brands-svg-icons';  // Importer l'icône faGithub
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';



function Home(props) {
    return (
        <>

        <nav className="nav-bar">
            <div>
                <Link to={"/"} className="logo-nav">LOGO</Link>
            </div>
            <ul className="nav-li">
                <li> <Link to={Home}  className="nav-links" >HOME</Link> </li>
                <li> <Link  className="nav-links" >SKILLS</Link> </li>
                <li> <Link   className="nav-links" >PROJETS</Link> </li>
            </ul>
        </nav>

        <main>
            <div className="head-page">
                <h2>Bonjour</h2>
                <h1>Je suis Emel Kecebas</h1>
                <h2>A la recherche d'une alternance en Développement Web et Web Mobile</h2>
                <h3>Du 22 Avril 2025 au 20 Avril 2026 </h3>
                <div className="container-social">
                    <ul className="ul-social">
                        <li className="li-social git">
                            <a  className="a-social" href="https://github.com/Emel-k?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x" color="grey" />
                            </a>
                        </li>
                        <li className="li-social linkedin">
                            <a  className="a-social" href="https://www.linkedin.com/in/emel-kecebas-37198a339/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} size="3x"  color="grey"/>
                            </a>
                        </li>
                        <li className="li-social mail">
                            <a className="a-social" href="mailto:kcb.emel41@gmail.com">
                                <FontAwesomeIcon icon={faGoogle} size="3x" color="grey" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>

        </>
    );
}

export default Home;