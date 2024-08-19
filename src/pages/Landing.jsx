import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
          <Col>
            <h3 className='textStyle'>Welcome to <span className='text-warning'>Media player</span></h3>
            <p className='textStyle' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim at, maiores voluptate earum suscipit dolores officia labore, quidem nulla nobis quibusdam, voluptatum modi. Consequuntur, non animi neque natus sunt soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam atque recusandae aut eius autem commodi ipsa at, dolorum repudiandae odio voluptatibus ipsum natus perferendis laborum nemo quasi architecto illum exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error aut laudantium facere quis? Ipsa eligendi veniam deleniti ut, reprehenderit nemo, incidunt voluptatum hic, quo nihil laudantium repellendus aperiam ipsam!</p>
            <Link to='/home'>
              <button className='btn btn-warning'>Get Started <i class="fa-solid fa-arrow-right ms-1"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'300px'} />
          </Col>

        </Row>

      </Container>
      <div className="container">
        <h3 className='textStyle'>Features</h3>
        <div className="cards d-flex align-items-center justify-content-evenly mt-5 mb-5">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title style={{ color: 'orange' }}>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title style={{ color: 'orange' }}>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title style={{ color: 'orange' }}>Card Title</Card.Title>
              <Card.Text className='textStyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mb-5 mt-5 border border-2 border-secondary p-5 rounded-3">
        <Row className='mt-3'>
          <Col>
          <h3 className='textStyle'>Simple and Powerful</h3>
          <p className='textStyle'><span className='fs-5 text-warning fw-bolder'>Play everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet explicabo neque, doloremque dolores obcaecati, magnam id optio sit inventore earum. Quisquam dignissimos nam impedit, provident libero distinctio aliquam dolore?</p>
          <p className='textStyle'><span className='fs-5 text-warning fw-bolder'>Play everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet explicabo neque, doloremque dolores obcaecati, magnam id optio sit inventore earum. Quisquam dignissimos nam impedit, provident libero distinctio aliquam dolore?</p>
          <p className='textStyle'><span className='fs-5 text-warning fw-bolder'>Play everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet explicabo neque, doloremque dolores obcaecati, magnam id optio sit inventore earum. Quisquam dignissimos nam impedit, provident libero distinctio aliquam dolore?</p>

          </Col>
          <Col>
          <div>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/Y4fodpIwal8" title="Tu Jo Mila Raabta | Shirley Setia Jubin Nautiyal | T-Series Mixtape | Bhushan Kumar Ahmed K Abhijit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </Col>
          
        </Row>

      </div>
    </>
  )
}

export default Landing