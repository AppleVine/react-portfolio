import { Link } from "react-router-dom";
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
             <div className="text-zone">
                 <h1>
                     Hi, <br />
                     I'm Jakeb.
                 </h1>
                 <h2>
                     Full-stack developer, <br />
                     Quality assurance, <br />
                     IT support.
                 </h2>
                 <Link to="/contact" className="flat-button">CONTACT ME</Link>
             </div>
        </div>
    );
};

export default Home;
