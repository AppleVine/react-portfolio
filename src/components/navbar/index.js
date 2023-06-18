import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from "../../assets/images/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFile, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => (
    <div className = 'navBar'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo of a cat with writing in the background." />
        </Link>
        <nav>
            <NavLink exact={true} activeClassName="active" to="/" className="home-link">
                <FontAwesomeIcon icon={faHome} color="#BBCDE5" />
            </NavLink>

            <NavLink exact={true} activeClassName="active" to="/about" className="about-link">
                <FontAwesomeIcon icon={faUser} color="#BBCDE5" />
            </NavLink>

            <NavLink exact={true} activeClassName="active" to="/projects" className="projects-link">
                <FontAwesomeIcon icon={faCode} color="#BBCDE5" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jakeb-cockburn-0a0421155/">
                    <FontAwesomeIcon icon={faLinkedin} color='#BBCDE5' />
                </a>
            </li>
            
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/AppleVine">
                    <FontAwesomeIcon icon={faGithub} color='#BBCDE5' />
                </a>
            </li>

            <li>
                <a target="_blank" href="../../assets/documents/JakebCockburnResume.pdf">
                    <FontAwesomeIcon icon={faFile} color='#BBCDE5' />
                </a>
            </li>
        </ul>
    </div>
)

export default NavBar