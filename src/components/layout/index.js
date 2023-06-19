import NavBar from '../navbar/index';
import './index.scss';
import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
  
    return (
      <div>
        <NavBar />
        {location.pathname !== '/' && (
          <div className="content">
            <h1>Page not found</h1>
            <p>The requested page does not exist.</p>
          </div>
        )}
      </div>
    );
  };
  

export default Layout;
