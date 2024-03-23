import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import separator3 from './../../../styles/images/separator3.svg'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <Container fluid className='footer bg-secondary px-0'>
        <Container fluid className='top-footer bg-secondary text-light border-to px-0'>
          <Container fluid className='bg-ligh text-light text-center py-3'>
            <h4>Contact & Informations</h4>
          </Container>
          <Row className='text-center w-100'>
            <Col>
            <Link to="/contact" className='text-decoration-none text-light'  >
              <p className='py-2'>Nous contacter</p>
            </Link>
            </Col>
            <Col>
              <p className='py-2'>Le studio | les prestations</p>
            </Col>
            <Col>
              <p className='py-2'>Mentions légales</p>
            </Col>
            <Col>
              <p className='py-2'>Réseaux socaiux</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className='down-footer bg-dark text-light py-3'>
          Hello World
        </Container>
      </Container>
    </>
  )
}

export default Footer
