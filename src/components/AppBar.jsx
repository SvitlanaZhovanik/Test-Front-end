import PropTypes from 'prop-types';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function AppBar({ count, children }) {
  return (
    <main>
      <header>
        <Navbar bg="primary" variant="dark" expand="lg" className="mb-5">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Shop</Nav.Link>
                </LinkContainer>
                <div className="vr" />
                <LinkContainer to="order">
                  <Nav.Link>
                    Shoping Card <Badge bg="dark">{count}</Badge>
                  </Nav.Link>
                </LinkContainer>
                <div className="vr" />
                <LinkContainer to="history">
                  <Nav.Link>History</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section>{children}</section>
    </main>
  );
}

AppBar.propTypes = {
  count: PropTypes.number,
  children: PropTypes.any.isRequired,
};
