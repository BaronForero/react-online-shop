import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from '../img/Logo.png'

const Navbar = () => {
    return ( 
        <nav>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
            </div>
            
        </nav>
    );
}

export default Navbar;