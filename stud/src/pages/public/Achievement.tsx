import React from 'react'
import ad1 from '../../styles/images/image832.png'
import imag2 from '../../styles/images/bambou.jpg'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import Footer from '../../components/layouts/public/Footer'
import LazyLoad from 'react-lazy-load'



const Achievement = () => {
const titleFirst = "Nos Réalisations"


  return (
    <React.Fragment>
      <Container fluid className='px-0 w-100'>
        <Row className='px-0'>
          <Col className='px-0' sm={6}>
            <Container className='ze-titl pt-5 mt-5'>
              <h1 className=''>{titleFirst}</h1>
            </Container>
          </Col>
          <Col className='px-0' sm={6}>
            <Container className='text-en bg-crea h-100 px-0'>
              <Image
                src={ad1}
                width={300}
                className='d-bloc w-100 '
                style={{transform: "rotate(-30deg)"}}
                alt='image de fond'
              />
            </Container>
          </Col>
        </Row>
      </Container>
      {/* <Slider sliderProps={sliderProps} /> */}  
      <Container fluid className='bg-secondar px-4 px-lg-0'>
        <Container fluid className='px-0'>
          <Row className='d-flex pe-0 '>
            <Col md={8} className=' bg-light p-0 '>
              <Card className='border-0 ' style={{ width: '100%', height: '100%' }}>
                <Card.Body>
                  <Card.Title>
                    <i className='ri-tools-fill fs-2 '></i>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <br />
                    make up the bulk of the card's content.make up the bulk of the card's
                    content.
                  </Card.Text>
                  <Button variant='secondary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='px-'>
              <Image fluid src={imag2} alt='poudre' width='auto' height='100%' className='' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='bg-secondar px-0'>
        <Container fluid className='ps-0'>
          <Row className='d-flex  flex-row-reverse'>
            <Col md={8} className=' bg-light p-0 '>
              <Card
                className='border-0 rounded-0 backg-light-500-secondar'
                style={{ width: '100%', height: '100%' }}
              >
                <Card.Body>
                  <Card.Title>
                    <i className='ri-tools-fill fs-2 '></i>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <br />
                    make up the bulk of the card's content.make up the bulk of the card's
                    content.
                  </Card.Text>
                  <Button variant='secondary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className=''>
              <LazyLoad width='100%' threshold={1}>
                <Image src={ad1} alt='poudre' width='100%' height='auto' className='' />
              </LazyLoad>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default Achievement
