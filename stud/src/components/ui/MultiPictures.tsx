import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const MultiPictures= ({mPProps}: any) => {
  return (
    <React.Fragment>
       <Container className='text-center'><p>"mon titre h4"</p></Container>
        <Container fluid className=''>
          <Row style={{ height: '180px' }}>
            {Array.from({length: 4}).map((_, indx: number) =>(

                <Col style={{height: "150px"}} className='d-flex align-items-center justify-content-center border text-center prest m-auto align-itmes-center'>
              <div>
                <i className='ri-gatsby-fill fs-2 '></i>
              </div>
            </Col>
                ))}
            {/* <Col className='border h-100 text-center prest m-auto'>
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
            </Col> */}
          </Row>
        </Container>
    </React.Fragment>
  )
}

export default MultiPictures
