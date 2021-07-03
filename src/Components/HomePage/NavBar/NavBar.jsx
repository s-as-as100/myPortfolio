import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import './NavBar.css'
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
       
    

    // importan we are not used anchor tag inside the router because it reload the whole page
 
     
    render() { 
        const {location} = this.props;

        const homeClass = location.pathname === '/' ? 'active-item' : ' ';
        const aboutClass = location.pathname === '/about' ? 'active-item' : ' ';

        const projectsClass = location.pathname === '/projects' ? 'active-item' : ' ';

        const skillsClass = location.pathname === '/skills' ? 'active-item' : ' ';

        const contactClass = location.pathname === '/contact' ? 'active-item' : ' ';

           
       console.log(location)



        return ( 
            <Menu>
            <Link  to="/" className={`menu-item ${homeClass}`} href="/">Home</Link>
            <Link  to="/about"   className={`menu-item ${aboutClass}`}   >About</Link>
            <Link  to="/projects"   className={`menu-item ${projectsClass}`}  >Projects</Link>
            <Link  to="/skills"   className={`menu-item ${skillsClass}`}  >Skills</Link>
            <Link  to="/contact"    className={`menu-item ${contactClass}`}   >Contact</Link>
        
          </Menu>
         );
    }
}
 
export default withRouter(NavBar);