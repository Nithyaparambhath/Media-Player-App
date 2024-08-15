import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div style={{ background: '#000000' }}>
      <Container>
        <Row>
          <Col lg={5}>
            <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-start flex-column text-light'>
              <h1>Welcome To Media Player</h1>
              <p>Where user can manage their favorite videos. User canupload any youtube videos by copy and paste their URL Link. Media Player will allow to  add and remove their uploaded videos and also arrange them in different categories by drag and drop.It's free, Try it now!</p>
              <Link to="/home"> <button className='btn btn-primary'>Click Here to Know More!!!</button></Link>
            </div>
          </Col>
          <Col></Col>
          <Col lg={5}>
            <img style={{ backgroundSize: 'cover', width: '500px' }} src='https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landingpage