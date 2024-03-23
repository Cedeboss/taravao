import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'

import ad1 from '../../styles/images/poudre.jpg'
import { Link } from 'react-router-dom';
import { cardDataType } from '../../pages/public/Home';



const ThreeCols: React.FC<{ cardData: cardDataType[] }> = ({ cardData }) => {



  const long = parseInt((12 / cardData?.length).toFixed(0))

  return (
    <Row className='g-2 g-sm-1 '>
      {cardData.map((card: any, indx: number) => (
        <Col key={indx} xs={12} sm={6} md={long} className='font-85 '>
          <Link to={`/${indx}`} className='text-decoration-none'>
            {card.imageCard ? (
              <Image src={ad1} alt='poudre' width='100%' height='auto' className='' />
            ) : (
              <Card
                style={{ width: '100%', height: '100%' }}
                className='bg-transparent border-0'
              >
                <Card.Body>
                  <Card.Title className='text-light-primary'>
                    <Row>
                      <Col xs={1} className='m-auto'>
                        <i className={`${card.iconTitle} fs-2`}></i>
                      </Col>
                      <Col className='m-auto ps-4'>
                        {''} {card.title}
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text className='text-light-primary'>{card.textCard}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default ThreeCols
