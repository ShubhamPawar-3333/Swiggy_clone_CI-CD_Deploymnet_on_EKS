import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../Photos/Swiggy-logo.png'; // Update path to your logo
import './Navigate.css'; // Import the styles for the navigation bar
import LocationSelector from './LocationSelector'; // Import the LocationSelector component

const Navigate = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className="shadow-sm px-4 py-3"
            style={{ backgroundColor: 'white' }} // White background for the navbar
        >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img src={Logo} alt="Swiggy Logo" width="50"/>
                    <LocationSelector />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={handleToggle}
                    className="border-0"
                />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link href="#search" className="text-orange">
                                <i className="fa-solid fa-magnifying-glass"></i> Search
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#offers" className="text-orange">
                                <i className="fa-solid fa-percent"></i> Offers{' '}
                                <sup style={{ color: '#fc8019' }}>New</sup>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#help" className="text-orange">
                                <i className="fa-solid fa-bowl-food"></i> Help
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#profile" className="text-orange">
                                <i className="fa-regular fa-user"></i> Profile
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#cart" className="text-orange">
                                <i className="fa-solid fa-cart-shopping"></i> Cart
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigate;


// import React from 'react'

// import { Col, Row } from 'react-bootstrap'
// import './Navigate.css'
// import Logo from '../Photos/Swiggy-logo.png';

// function Navigate() {
//     return (
//         <div>
//             <Row className='w-100 pt-3 shadow pb-2'>
//                 <Col>
//                     <div id="Nav-logo" style={{ display: "flex", gap: "30px" }} className="d-flex justify-content-center align-items-center">
//                         <img width="55px" src={Logo} alt="Swiggy Logo"/>
//                         <p style={{ fontSize: "13px" }} className="mt-3">
//                             <span className="fw-bold text-decoration-underline">Kakkanad</span> 288R+8PX,
//                             Echamuku, Kakkanad...
//                         </p>
//                         <i style={{ color: "#e78838" }} className="fa-solid fa-angle-down"></i>
//                     </div>

//                 </Col>
//                 <Col>
//                         <div id='Nav-icons' className='d-flex justify-content-between align-items-center w-75 mt-3'>
//                             <p><i className="fa-solid fa-magnifying-glass"> </i> Search</p>
//                             <p><i className="fa-solid fa-percent"></i> Offers <sup style={{color:"#fda502"}}>New</sup> </p>
//                             <p><i className="fa-solid fa-bowl-food"></i> Help</p>
//                             <p><i className="fa-regular fa-user"></i> Profile</p>
//                             <p><i className="fa-solid fa-cart-shopping"></i> Cart</p>
//                         </div>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

// export default Navigate