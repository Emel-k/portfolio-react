import React from 'react';
import {Link} from "react-router-dom";
import "../src/styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer FontAwesomeIcon
import { faGithub } from '@fortawesome/free-brands-svg-icons';  // Importer l'icône faGithub
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";


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
                <div className="texte-animer">
                <h2>Bonjour</h2>
                <h1>Je suis Emel Kecebas</h1>
                <h2>A la recherche d'une alternance en Développement Web et Web Mobile</h2>
                <h3>Du 22 Avril 2025 au 20 Avril 2026 </h3>
                </div>
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

            <section className="container-skills">
                <h3 className="title-card">Mes compétences</h3>
                <p className="language">Les langages que je connais : </p>
                <div className="container-card">

                    <div className="card-skill">
                        <div className="skill">
                        <FontAwesomeIcon icon={faHtml5} size="2x" color="#E44D26" />
                        <p className="name-skill">HTML</p>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="skill">
                        <FontAwesomeIcon icon={faCss3Alt} size="2x" color="#1572B6" />
                        <p className="name-skill">CSS</p>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="skill">

                        <FontAwesomeIcon icon={faWordpress} size="2x" color="#21759B" />
                        <p className="name-skill">WordPress</p>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="skill">
                        <FontAwesomeIcon icon={faSquareJs} size="2x" color="#F7DF1E" />
                        <p className="name-skill">Javascript</p>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="skill">
                        <FontAwesomeIcon icon={faNodeJs} size="2x" color="#8CC84B" />
                        <p className="name-skill">Node.js</p>
                        </div>
                    </div>

                    <div className="card-skill">
                        <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="2x" color="#61DBFB" />
                        <p className="name-skill">React.js</p>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <h3>Mes Projets</h3>

                <div className="container-projet">

                    <div className="card-projet">
                        <div className="projet-card">
                            <FontAwesomeIcon icon={faHtml5} size="2x" color="#E44D26" />
                            <p className="name-skill">HTML</p>
                        </div>
                    </div>

                    <div className="card-projet">
                        <div className="projet-card">
                            <FontAwesomeIcon icon={faHtml5} size="2x" color="#E44D26" />
                            <p className="name-skill">HTML</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

         <footer>
             <div className="footer-part">
                 <ul className="ul-footer">
                     <li>
                         <Link className="li-footer">Politique de confidentialité</Link>
                     </li>
                     <li>
                         <Link className="li-footer">Mention légale</Link>
                     </li>
                 </ul>
             </div>
         </footer>

        </>
    );
}

export default Home;