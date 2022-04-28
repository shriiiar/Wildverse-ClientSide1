import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';
import './Header.css'
import logo from '../../img/kisspng-finchcocks-duntons-photography-photographer-portra-vector-slr-camera-5aa2a4d1bde079.1329631715206084657778.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import AllFunctions from '../../Hooks/AllFunctions';


const Header = () => {
    const [cart, setCart, addToCart, addToPackage, DeleteItem, emptyCart, emptyPackage] = AllFunctions(); // getting all the functions from a custom function
    const [user] = useAuthState(auth);
    const userSignOut = () => {
        signOut(auth);
        emptyCart();
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="" className='nav-bg mb-4' sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" width="70px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className="me-4 navLink" to="/">Home</CustomLink>
                        <CustomLink className="me-4 navLink" to="/shop">Shop</CustomLink>
                        <CustomLink className="me-4 navLink" to="/cart">Cart</CustomLink>
                        {
                            user && <CustomLink className="me-4 navLink" to="/checkout">Check Out</CustomLink>
                        }
                        <CustomLink className="me-4 navLink" to="/order">Order</CustomLink>
                        <CustomLink className="me-4 navLink" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="me-4 navLink" to="/about">About</CustomLink>
                        {
                            !user ? <>
                                <CustomLink className="me-4 navLink" to="/signup">Sign Up</CustomLink>
                                <CustomLink className="me-4 navLink" to="/login">Login</CustomLink></>
                                :
                                <>
                                    <span className='navLink border-0 fw-bold user-name me-4'>{user?.displayName}</span>
                                    <button className="navLink border-0 bg-transparent text-start p-0" onClick={userSignOut}>Sign Out</button></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;