import React from 'react'
import stud from '../../styles/images/stud900x600.jpg'
import bamb from '../../styles/images/bambou.jpg'
import ad1 from '../../styles/images/poudre.jpg'
import Slider from '../../components/ui/Slider'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import Footer from '../../components/layouts/public/Footer'

const Studio = () => {
const caroussTitle = "Le studio"
const sliderProps = {ad1, bamb, stud, caroussTitle}


  return (
    <>
     <Container fluid className='px-0'>
        <div className='ze-title pt-5 mt-5'>
          <h1 className='text-light-secondary' 
          >
            {caroussTitle}
          </h1>
        </div>
          <Image
            src={ad1}
            height={350}
            className='d-block vh-100 w-100'
            alt='image de fond'
          />
      </Container>
      {/* <Slider sliderProps={sliderProps} /> */}
      <Container fluid>
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
            <Col className='px-0'>
              <Image fluid src={ad1} alt='poudre' width='auto'  height='100%' className='' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='bg-secondar px-0'>
        <Container fluid className='ps-0'>
          <Row className='d-flex  flex-row-reverse'>
            <Col md={8} className=' bg-light p-0 '>
              {/* <Card className='border-0' style={{ width: '100%', height: '100%' }}> */}
              <Card className='border-0 rounded-0 backg-light-500-secondar' style={{ width: '100%', height: '100%' }}>
                
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
            <Col className='px-0'>
              <Image src={ad1} alt='poudre' width='100%' height='auto' className='' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default Studio
