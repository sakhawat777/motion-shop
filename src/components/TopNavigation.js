import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TopNavigation = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
					<Navbar.Brand href='/home'>Motion Shop</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/shop'>Shop</Nav.Link>
							<Nav.Link href='/review'>Order Review</Nav.Link>
							<Nav.Link href='/signup'>Sign Up</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default TopNavigation;
