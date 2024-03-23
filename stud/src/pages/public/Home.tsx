import React, { Profiler, useTransition } from 'react'
import { Button, Card, Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import stud from '../../styles/images/stud900x600.jpg'
import bamb from '../../styles/images/bambou.jpg'
import ad1 from '../../styles/images/poudre.jpg'
import musicaly from '../../styles/images/musicaly.jpg'
import separator1 from '../../styles/images/separator1.svg'
import separator3 from '../../styles/images/separator3.svg'
import proT from '../../styles/images/logo-protools-icon-512x512-gkj45qq2.png'
import mars from '../../styles/images/marshall.gif'
import console from '../../styles/images/console.jpg'
import '../../index.css';
import LazyLoad from 'react-lazy-load'
import Footer from '../../components/layouts/public/Footer'
import { Link, useOutletContext } from 'react-router-dom'
import { _counter } from '../../utils/functions'



const ThreeCols = React.lazy(() => import("../../components/ui/ThreeCols"))

export type cardDataType = {
  iconTitle: string | undefined;
  title: string | undefined;
  textCard: string | undefined;
  textButton: string | undefined;
  imageCard: boolean | undefined;
}


const HomePage = () => {

  const cardData: cardDataType[] = [
    {
      iconTitle: 'ri-mic-fill',
      title: 'Enregitrement',
      textCard:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      textButton: 'Go somewhere',
      imageCard: false,
    },
    {
      iconTitle: 'ri-volume-up-fill',
      title: 'Mixage & Mastering',
      textCard:
        "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
      textButton: 'Go somewhere',
      imageCard: false,
    },
    {
      iconTitle: 'ri-folder-music-fill',
      title: 'Compression',
      textCard: 'Some quick example text content.to build on the card title and make up the bulk of the cards content. Some quick example text to build',
      textButton: 'Go somewhere',
      imageCard: false,
    },
    // {
    //   iconTitle: "",
    //   title: "Error",
    //   textCard: "L'image ne s'est pas chargée",
    //   textButton: "",
    //   imageCard: true,
  
    // },
    // {
    //   iconTitle: 'ri-speaker-fill',
    //   title: 'Direction Cabine',
    //   textCard: 'Coaching by the P',
    //   textButton: 'Go somewhere',
    //   imageCard: false,
    // },
  ]

  const {
    isDarkTheme
  } = useOutletContext<any>()
  const [count, setCount] = React.useState<number>(0);
  const [count2, setCount2] = React.useState<number>(0);
const [isPending, startTransition] = useTransition()


const caroussTitle = "Polynejah Record"

React.useEffect(() => {

  startTransition(() => {
    _counter(count2, setCount2)
  })

}, [])





  


  return (
    <>
      <Container fluid className='px-0'>
        <div className='ze-title pt-5 mt-5'>
          <h1 className='text-light-secondary' data-theme={isDarkTheme ? 'dark' : 'light'}>
            {caroussTitle}
          </h1>
        </div>
        <Image src={stud} height={350} className='d-block vh-100 w-100' alt='image de fond' />
      </Container>

      <Container fluid className='px-0  separator1'>
        <Image src={separator1} height={142} className='d-block w-100' alt='layer' />
      </Container>
      <Container fluid className='bg-secondar my-3'>
        <Container fluid>
          <Row>
            <Col md={7} className=' bg-light p-0 '>
              <Card className='border-0' style={{ width: '100%', height: '100%' }}>
                <Card.Body>
                  <Card.Title>
                    <i className='ri-user-fill fs-2 '></i> {''} Nos références
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. make up the bulk of the card's content.make up the bulk
                    of the card's content.
                    <br />
                    <br />
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. make up the bulk of the card's content.make up the bulk
                    of the card's content. Some quick example text to build on the card title
                    and make up the bulk of the card's content. make up the bulk of the card's
                    content.make up the bulk of the card's content.
                    <br />
                    <br />
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. make up the bulk of the card's content.make up the bulk
                    of the card's content.
                    <Container className='text-end'>
                      <Link to='/'>En savoir plus</Link>
                    </Container>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className=''>
              <LazyLoad width='100%' threshold={1}>
                <Image
                  src={musicaly}
                  alt='poudre'
                  width='100%'
                  height='auto'
                  className='rounded'
                />
              </LazyLoad>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='px-0 separator3 d-none d-md-block'>
        <Image src={separator3} height={95} className='d-block w-100' alt='image de fond' />
      </Container>
      <Container
        fluid
        className='px-3 py-5  backg-light-500-secondary d-none d-md-block'
      ></Container>

      <Container fluid className='px-3 py-2 backg-light-500-secondary'>
        {/* <Container fluid className='bg-light'> */}
        <Container className='text-center'>
          <h4>Nos Prestations</h4>
        </Container>
        <ThreeCols cardData={cardData}  />
        <Container className='text-end'>
          <Button variant='light' className='my-2  text-success'>
            en savoir plus
          </Button>
        </Container>
        {/* </Container> */}
      </Container>
      <Container fluid className='px-0 separator31 d-none d-md-block'>
        <Image src={separator3} height={95} className='d-block w-100' alt='image de fond' />
      </Container>

      <Container fluid className='px-0 py-5'>
        <Container fluid className='px-0'>
          <LazyLoad width='100%' threshold={0.95}>
            <img src={console} alt='banner' style={{ width: '100%' }} />
          </LazyLoad>
        </Container>
      </Container>
      <Container fluid className='bg-light py-3'></Container>
      <Container fluid className=''>
        <Container fluid>
          <Row>
            <Col sm={12} md={8} className=' bg-light p-0 '>
              <Card
                className='border-0 rounded-0  backg-light-500-secondary'
                style={{ width: '100%', height: '100%' }}
              >
                <Card.Body>
                  <Card.Title>
                    <i className='ri-tools-fill fs-2 '></i> Situé en polynésie
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <br />
                    make up the bulk of the card's content.make up the bulk of the card's
                    content. Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    <br />
                    make up the bulk of the card's content.make up the bulk of the card's
                    content.
                  </Card.Text>
                  {/* <button
                    className='backg-light-primary text-light-secondary rounded-pill py-2 px-3'
                    onClick={() => {
                      import('../../utils/functions').then((module) => {
                        module._counter(count, setCount)
                      })
                    }}
                  >
                    {count}
                  </button>
                  <button
                    className='backg-light-primary text-light-secondary rounded-pill py-2 px-3'
                    onClick={() => {
                      startTransition(() => {
                        _counter(count2, setCount2)
                      })
                    }}
                  >
                    {isPending && 'Loading...'}
                    {count2}
                  </button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={4} className='px-0  backg-light-500-secondary d-flex align-items-center justify-content-center'>
              <Container fluid className='px-0 h-100 '>
                <Image src={ad1} alt='poudre' width='100%' height='100%' className='' />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='px-0 pb-3'>
        <Container className='text-center'>
          <h4>Réalisations</h4>
        </Container>
        <Container fluid>
          <Row>
            {/* <Col>
              <Carousel fade className='zIndex-'>
                <Carousel.Item interval={5000}>
                  <Image src={ad1} height={350} className='d-block w-100' alt='First slide' />
                  <Carousel.Caption className='bg-light text-dark opacity-75'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img src={bamb} height={350} className='d-block w-100' alt='First slide' />
                  <Carousel.Caption className='bg-light text-dark opacity-75'>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    src={console}
                    height={350}
                    className='d-block w-100'
                    alt='Third slide'
                  />
                  <Carousel.Caption className='bg-secondary opacity-75'>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col> */}
            <Col className=''>
              {' '}
              <img
                src='https://loremflickr.com/640/360'
                height={350}
                className='d-block w-100'
                alt='Third slide'
              />
            </Col>
            <Col className=''>
              {' '}
              <img
                src='http://via.placeholder.com/640x360'
                height={350}
                className='d-block w-100'
                alt='Third slide'
              />
            </Col>
            <Col className=''>
              {' '}
              <img
                src='http://via.placeholder.com/640x360'
                height={350}
                className='d-block w-100'
                alt='Third slide'
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='px-0 mb-2'>
        <Container className='text-center'>
          <h4>Technos et matos</h4>
        </Container>
        <Container fluid className=''>
          <Row style={{ height: '180px' }}>
            <Col className='text-center prest m-auto'>
              <div>
                <i className='ri-tools-fill fs-2 '></i>
              </div>
            </Col>
            <Col className='text-center prest m-auto'>
              <div>
                <img src={proT} alt='logo protools' width={36} />
              </div>
            </Col>
            <Col className='text-center prest m-auto'>
              <div>
                <img src={mars} alt='logo protools' width={86} />
              </div>
            </Col>
            <Col className='text-center prest m-auto'>
              <div>
                <i className='ri-tools-fill fs-2 '></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className='px-0  separator bg-secondary'>
        <Image src={separator3} height={42} className='d-block w-100 ' alt='layer' />
      </Container>

      <Footer />
    </>
  )
}

export default HomePage
