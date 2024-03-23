import React, { FormEvent } from 'react'
import { Button, Col, Container, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import Footer from '../../components/layouts/public/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/supabaseClient'
import { useUserStore, userUpdate } from '../../stores/UserStore'
import { contactDataType } from '../../types/types'
import MultiPictures from '../../components/ui/MultiPictures'



const Contact = () => {
  // useless function
  // const setUpdate = useUserStore.use.setUpdate()

  const navigate = useNavigate()

  const userData = {
    firstName: useUserStore.use.firstName(),
    lastName: useUserStore.use.lastName(),
    email: useUserStore.use.email(),
    objet: useUserStore.use.objet(),
    message: useUserStore.use.message(),
  }

  const caroussTitle = 'Contact'

  const [validated, setValidated] = React.useState<boolean>(false)
  const [formData, setFormData] = React.useState<contactDataType>({
    firstName: '',
    lastName: '',
    email: '',
    objet: '',
    message: '',
  })

  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  // Reset form data to initial values
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      objet: '',
      message: '',
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      console.log('No good')
    } else {
      event.preventDefault()
      if (
        formData?.firstName === formData?.lastName &&
        formData?.firstName === formData?.email
      ) {
        alert(" Ceci est un BotBreaker, Ne retentez pas c'est une perte de temps")
      } else {
        addMsg(formData)
        console.log(formData)
        
        setValidated(true)
        handleShow()
        setTimeout(() => {
          handleReset()
          handleClose()
          setValidated(true)
          navigate("/")

        }, 2000)
      }

    }
    setValidated(true)
  }

  const handleChange = (e: any) => {
    //uddate user state
    setFormData((prev: any) => {
      return {
        ...prev,
        [e.target?.name]: e.target?.value,
      }
    })
    //update user store
    userUpdate(e.target?.name, e.target?.value)
  }

  const addMsg = async (formData: contactDataType) => {

    try {
      const { data: dataz, error: errorz } = await supabase.from('Zmessages').insert([
        {
          firstName: formData?.firstName,
          lastName: formData?.lastName,
          email: formData?.email,
          objet: formData?.objet,
          message: formData?.message,
        },
      ])
      if(dataz){
        console.log("Message enregistré")
      }
      if(errorz){
        throw( errorz)
      }
    } catch (error) {
      throw(error)
    }
  }



  const mPProps: any = "Hello"

  console.log(formData)
  console.log(userData)
  return (
    <>
      <Container fluid className='px-0 '>
        <div className='ze-title-contact pt-5 mt-5 m-aut text-center d-flex justify-content-center'>
          <div className='pt-5'>
            <h1 className='text-light'>{caroussTitle}</h1>
          </div>
        </div>
      </Container>
      <Container fluid className='py-4'>
        <Row className='m-auto'>
          <Col xs={12} md={7} className='px-1 px-lg-5'>
            <Container
              onClick={handleShow}
              className='text-center rounded-pill px-3 py-2 backg-gray-500'
            >
              <h4>Laissez nous un message</h4>
            </Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className='mb-3 g-4 m-auto'>
                <Form.Group as={Col} md='12' controlId='validationCustom01'>
                  <Form.Control
                    required
                    className='rounded-0'
                    type='text'
                    name='firstName'
                    placeholder='Prénom'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col} md='12' controlId='validationCustom02'>
                  <Form.Control
                    required
                    className='rounded-0'
                    type='text'
                    name='lastName'
                    placeholder='Nom'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Saisissez votre nom.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='12' controlId='validationCustomUsername'>
                  <InputGroup hasValidation>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Email'
                      aria-describedby='inputGroupPrepend'
                      required
                      className='rounded-0'
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>
                      Saisissez un email correct, exemple : monemail@mail.com
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md='12' controlId='validationCustom03'>
                  <Form.Control
                    type='text'
                    name='objet'
                    placeholder='Objet'
                    required
                    className='rounded-0'
                    value={formData.objet}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type='invalid'>
                    Saisissez l'objet de votre message
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='12' controlId='validationCustomUsername'>
                  <InputGroup hasValidation>
                    <Form.Control
                      type='text'
                      name='message'
                      placeholder='Tapez votre message'
                      aria-describedby='inputGroupPrepend'
                      required
                      as='textarea'
                      className='rounded-0'
                      style={{ height: '100px' }}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type='invalid'>
                      Saisissez votre message.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Container className='my-2'>
                <Button
                  type='submit'
                  className='rounded-pill px-4 py-2 backg-light-green border-0'
                >
                  Envoyer
                </Button>
              </Container>
            </Form>
          </Col>
          <Col xs={12} md={5} className='bambo'>
            <Container className='py-3'>
              <h5>Nous contacter :</h5>
              <p>Par Téléphone : 87987654</p>
              <p>Par Email : mail@mail.pf</p>
            </Container>
            <Container>
              <h5>Retrouvez nous sur les réseaux :</h5>
              <p>
                <Link to='/' className='text-decoration-none text-light-green'>
                  <i className='ri-facebook-fill fs-3'></i>
                </Link>
                <Link to='/studio' className='text-decoration-none text-light-green'>
                  <i className='ri-messenger-fill fs-3'></i>
                </Link>
              </p>
            </Container>
            <Container className='border d-none'>
              <p>"Zone libre" :</p>
              <p>
                <Link to='/' className='text-decoration-none text-light-green'>
                  <i className='ri-facebook-fill fs-3'></i>
                </Link>
                <Link to='/studio' className='text-decoration-none text-light-green'>
                  <i className='ri-messenger-fill fs-3'></i>
                </Link>
              </p>
              <p>
                <Link to='/' className='text-decoration-none text-light-green'>
                  <i className='ri-facebook-fill fs-3'></i>
                </Link>
                <Link to='/studio' className='text-decoration-none text-light-green'>
                  <i className='ri-messenger-fill fs-3'></i>
                </Link>
              </p>
              <p>
                <Link to='/' className='text-decoration-none text-light-green'>
                  <i className='ri-facebook-fill fs-3'></i>
                </Link>
                <Link to='/studio' className='text-decoration-none text-light-green'>
                  <i className='ri-messenger-fill fs-3'></i>
                </Link>
              </p>
              <p>
                <Link to='/' className='text-decoration-none text-light-green'>
                  <i className='ri-facebook-fill fs-3'></i>
                </Link>
                <Link to='/studio' className='text-decoration-none text-light-green'>
                  <i className='ri-messenger-fill fs-3'></i>
                </Link>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className='px-0 mb-2 d-none d-md-block'>
        <MultiPictures mPProps={mPProps} />
        {/* <Container className='text-center'><p>"mon titre h4"</p></Container>
        <Container fluid className=''>
          <Row style={{ height: '180px' }}>
            <Col className='border h-100 text-center prest m-auto'>
              <div>
                <i className='ri-gatsby-fill fs-2 '></i>
              </div>
            </Col>
            <Col className='border h-100 text-center prest m-auto'>
              <div>
                <i className='ri-remix-run-fill fs-2 '></i>
              </div>
            </Col>
            <Col className='border h-100 text-center prest m-auto'>
              <div>
                <i className='ri-opera-fill fs-2 '></i>
              </div>
            </Col>
            <Col className='border h-100 text-center prest m-auto'>
              <div>
                <i className='ri-opera-fill fs-2 '></i>
              </div>
            </Col>
            <Col className='border h-100 text-center prest m-auto'>
              <div>
                <i className='ri-tumblr-line fs-2 '></i>
              </div>
            </Col>
          </Row>
        </Container> */}
      </Container>

      <Footer />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        className='justify-content-end mt-0'
      >
        <Container className='text-center py-3 w-75'>
          <Row className=''>
            <Col xs={1} className=''>
              <i className='ri-check-line fs-1 align-bottom text-light-green '></i>
            </Col>{' '}
            <Col xs={10} className='m-auto text-start'>
              MESSAGE ENVOYE !
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  )
}

export default Contact
