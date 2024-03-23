import React from 'react'
import { Alert, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { supabase } from '../../../utils/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { authAdminType } from '../../../types/types';


const Auth = () => {

  const navigate = useNavigate()

    const [isError, setIsError] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState<authAdminType>({
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setFormData((prev: any) => {
        return{
                ...prev,
                [e.target?.name]:e.target?.value
            }
        })

    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        setIsError(false)

       try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })
          console.log(data)
          if(data?.session?.user?.aud === "authenticated" ){
            setIsError(false)
            setIsLoading(false)
            navigate("/admin")
          }
          if(error){
            setIsError(true)
        setIsLoading(false)

            console.log(error)
          }
       } catch (error) {
        console.log("Errorss   : " + error)
        setIsLoading(false)

       }
    }


  return (
    <Container className='mt-5 pt-5'>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} md={8} lg={5} xl={4}>
            <Card className='p-4'>
              <Card.Title className='text-center'>
                <i className='ri-fire-line fs-4'></i> Identifiez-vous
              </Card.Title>
              <Container>
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Identifiant'
                    className='mb-3'
                    onChange={handleChange}
                  />
                  <Form.Control
                    type='password'
                    name='password'
                    placeholder='Mot de passe'
                    className='mb-3'
                    onChange={handleChange}
                  />
                  {isError && (
                    <Alert variant='danger'>
                      <i className='ri-alert-line fs-4'></i>Vos Identifiants sont incorrects
                    </Alert>
                  )}
                  <Button variant='outline-secondary' type='submit' className='mb-3 w-100'>
                    {isLoading && <Spinner size='sm' />} connexion
                  </Button>
                </Form>
              </Container>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Auth
