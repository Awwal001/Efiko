import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../actions/userActions';
import classes from './NavigationItems.module.css';

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavigationItems = () => {
	
	const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
		<header className={classes.NavigationItems}>
			<Container>
				<Nav>
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/calculator">
						<Nav.Link>Calculator</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/store/home">
						<Nav.Link>Store</Nav.Link>
					</LinkContainer>
					
					{userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/dashboard'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}
								
					{userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/users'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/products'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orders'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
				</Nav>	
			</Container>	
		</header>
    );
};

// const mapStateToProps = state => ({
	// isAuthenticated: state.auth.isAuthenticated
// });

export default NavigationItems;

//export default connect(mapStateToProps, { logout })(navigationItems);
