import React, { useState, Fragment, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Wave from 'react-wavify';
import '../css/Navigation.css';
import Context from '../utils/context';

const Navigation = () => {
    let history = useHistory();
    const context = useContext(Context);
    const [navbarColor, setNavbarColor] = useState('Home');
    const [rightNav, setRightNav] = useState();
    const [sign, setSign] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        /* if (localStorage.getItem("navbarColor")) {
            setNavbarColor(localStorage.getItem("navbarColor"));
        } */
        console.log(window.location.pathname);
        if (window.location.pathname === '/predict') {
            console.log('you found predictor')
            setNavbarColor('Predictor')
        }
        else if (window.location.pathname === '/track') {
            console.log('you found tracker')
            setNavbarColor('Tracker')
        }
        else {
            console.log('you found home')
            setNavbarColor('Home');
        }
    }, [])
    
    useEffect(async() => {
        if (localStorage.getItem('token')) {
            let result;
    
            if (context.stateFName === '' && context.stateLName === '') {
                result = await getUserInfo();
            } else{
                result = [context.stateFName, context.stateLName];
            }
    
            if (result.length > 0) {
                setRightNavToWelcome(result);
                setLoggedIn(true);
            } else {
                setRightNavToLoginSignup();
                setLoggedIn(false);
            }
        } else {
            setRightNavToLoginSignup();
            setLoggedIn(false);
        }

    }, [navbarColor, sign]);

    /* useEffect(() => {
        localStorage.setItem("navbarColor", navbarColor);
    }, [navbarColor]) */

    const getUserInfo = async () => {
        let response = await fetch('/api/user', {headers: { 'x-access-tokens': localStorage.getItem('token')}});
        let json = await response.json();
        if (json.message === 'Token is invalid' || json.message === 'Token is missing') {
            console.log(json.message);
            return [];
        } else {
            console.log(json.firstName)
            console.log(json.lastName)
            context.assignFName(json.firstName);
            context.assignLName(json.lastName);
            return [json.firstName, json.lastName];
        }
    }
    const signoutUser = () => {
        localStorage.removeItem('token');
        context.assignFName('');
        context.assignLName('');
        setSign(!sign);
        setNavbarColor('Home');
        history.push('/');
    }

    const setRightNavToLoginSignup = () => {
        setRightNav(<Fragment>
            <Nav.Link>
                <Link to="/auth/register" onClick={() => setNavbarColor('Home')} className="navbar-item-button-c">
                    <button className='navbar-signup-c'>Sign up</button>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={{
                            pathname: '/auth/login',
                            state: { detail: 'DIRECTED' }
                        }} onClick={() => setNavbarColor('Home')} className="navbar-item-button-c">
                    <button className='navbar-signin-c navbar-signin-colour'>Sign in</button>
                </Link>
            </Nav.Link>
        </Fragment>);
    }

    const setRightNavToWelcome = (result) => {
        setRightNav(<Fragment>
            <NavDropdown alignRight title={`Welcome, ${result[0]} ${result[1]}`} id="collasible-nav-dropdown" className='navbar-profile-dropdown'>
                <NavDropdown.Item onClick={() => signoutUser()}>
                    Sign out
                </NavDropdown.Item>
            </NavDropdown>
        </Fragment>);
    }

    return (
        <div className='nav-inner'>
            <Navbar collapseOnSelect expand="lg" bg="dark" className={`${(navbarColor === 'Predictor') ? 'navbar-b' : (navbarColor === 'Tracker') ? 'navbar-r' : 'navbar-w'}`}>
                <Navbar.Brand>
                    <Link to='/' onClick={() => setNavbarColor('Home')} className='navbar-item-c navbar-item-width-height navbar-title'>
                        Diabetes Doctor
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='m-auto navbar-item-font'>
                        {(loggedIn) && <Nav.Link>
                            <Link to='/predict' onClick={() => setNavbarColor('Predictor')} className={`navbar-item-c navbar-item-width-height ${(navbarColor === 'Predictor') ? 'navbar-selected' : 'navbar-item-normal'}`}>
                                Predictor
                            </Link>
                        </Nav.Link>}
                        {(loggedIn) && <Nav.Link>
                            <Link to='/track' onClick={() => setNavbarColor('Tracker')} className={`navbar-item-c navbar-item-width-height ${(navbarColor === 'Tracker') ? 'navbar-selected' : 'navbar-item-normal'}`}>
                                Tracker
                            </Link>
                        </Nav.Link>}
                    </Nav>
                    <Nav>
                        {rightNav}
                    </Nav>
                </Navbar.Collapse>
                {(navbarColor != 'Home') && <Wave fill='#fff'
                    paused={false}
                    className='navbar-wave navbar-wave-1'
                    options={{
                        height: 15,
                        amplitude: 20,
                        speed: 0.15,
                        points: 4
                    }}
                />}

                {(navbarColor != 'Home') && <Wave fill='#f6f6f6'
                    paused={false}
                    className='navbar-wave navbar-wave-2'
                    options={{
                        height: 20,
                        amplitude: 25,
                        speed: 0.15,
                        points: 3
                    }}
                />}
            </Navbar>
        </div>
    )
}
export default Navigation