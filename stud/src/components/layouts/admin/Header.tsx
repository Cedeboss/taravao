import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
     /* Hooks
   *******************************************************************************************/
  let navigate = useNavigate();


  /* Render
   *******************************************************************************************/
  return (
    <Navbar bg="secondary" variant="dark" className="py-0">
    <Container fluid>
    <Link to='/admin' className='nav-link' >
          <Row className='arc'>
            <Col className='text-center align-middle'>
              <img
                alt='Tête de lion icon'
                src='https://img.icons8.com/ios-filled/512/lion-head.png'
                style={{ width: '56px', height: '56px' }}
              />
            </Col>
            <Col className='logo-itle text-ui m-auto'>Polynejah</Col>
            <Col className='logo-itle text-ui m-auto'>Polynejah</Col>
          </Row>
        </Link>
      <Nav className="ms-auto">

        <Nav.Link href="/">
          Déconnexion
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header
