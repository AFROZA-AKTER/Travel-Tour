
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (

    <>
      <Navbar style={{ backgroundColor: "#FFFFFF" }} sticky="top" variant="dark outline-secondary" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://a6e8z9v6.stackpathcdn.com/traveltour/main4/wp-content/uploads/2019/04/logo-v3.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{ fontWeight: '500' }} className="text-muted" as={HashLink} to="/home#home">HOME</Nav.Link>
            <Nav.Link style={{ fontWeight: '500' }} className="text-muted" as={HashLink} to="/about">ABOUT</Nav.Link>
            <Nav.Link style={{ fontWeight: '500' }} className="text-muted" as={HashLink} to="/home#tour">TOUR</Nav.Link>
            <Nav.Link style={{ fontWeight: '500' }} className="text-muted" as={HashLink} to="/home#reviews">REVIEWS</Nav.Link>
            <Nav.Link style={{ fontWeight: '500' }} className="text-muted" as={HashLink} to="/myOrder">MY ORDER</Nav.Link>
            {/* <Nav.Link style={{ fontWeight: '500' }} className="text-muted" as={HashLink} to="/dashboard">DASHBOARD</Nav.Link> */}
            {
              user.email ?
                <div>
                  <Nav.Link onClick={logOut} className="text-info fw-bold mx-3">LOGOUT</Nav.Link>
                  <Nav.Link className="text-info fw-bold mx-3" as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                  <Navbar.Text className="text-info fw-bold mx-4">
                    Signed in as: <a href="#login" style={{ color: "#F97150" }}>{user.displayName}</a>
                  </Navbar.Text>
                </div>

                :
                <div>
                  <Nav.Link style={{ fontWeight: '500' }} className="text-info" as={Link} to="/login">LOGIN</Nav.Link>
                  <Nav.Link style={{ fontWeight: '500' }} className="text-info" as={Link} to="/signup">SIGN UP</Nav.Link>
                </div>

            }

          </Navbar.Collapse>
          <Nav className="me-auto">

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;