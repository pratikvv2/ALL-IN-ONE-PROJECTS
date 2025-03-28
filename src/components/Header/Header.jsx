import { LogoutIcon } from '@/assets/icons';
import './Header.scss'
import { Container, Navbar, Offcanvas, Nav, NavDropdown, } from 'react-bootstrap'
import { useMedia } from 'react-use'
import { HEADER_MENUS } from '@/utils/constants';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { routes } from '@/utils/routes';


const Header = () => {
    const isLargeScreen = useMedia('(min-width: 992px)');
    const [isSideNavVisible, setIsSideNavVisible] = useState(false);

    const handleSideNavToggle = () => {
        if (!isLargeScreen) {
            setIsSideNavVisible(!isSideNavVisible);
        }

    }
    return (
        <div className='ia-header'>
            <Navbar expand={"lg"} className='ia-navbar'>
                <Container fluid>
                    <Navbar.Brand>
                        <RouterLink className='text-light text-decoration-none' to={routes.home}>Digital Hisab</RouterLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleSideNavToggle} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                        show={isSideNavVisible}
                        onHide={() => setIsSideNavVisible(false)}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>InVA </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {HEADER_MENUS.map((item) => (
                                    <RouterLink onClick={handleSideNavToggle} key={item.id} className={`nav-link ${isLargeScreen ? "text-light" : "text-dark"}`} to={item.pathName}>{item.itemName}</RouterLink>
                                ))}
                                <NavDropdown
                                    title="More"
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                >
                                    <NavDropdown.Item href="#action3">Organization</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Your Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        <LogoutIcon className="text-primary" /> Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header