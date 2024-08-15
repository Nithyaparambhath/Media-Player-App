import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddVideos from '../components/AddVideos'
import { Link } from 'react-router-dom'
import ViewVideos from '../components/ViewVideos'
import AddCategory from '../components/AddCategory'
import ViewCategory from '../components/ViewCategory'

function Home() {

  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({})
  const [addCategoryResponse,setAddCategoryResponse] = useState({})

  return (
    <div className='m-5 d-flex justify-content-center align-items-center'>
      <Container>
        <Row>
          <Col lg={10}>
            <div className='d-flex  align-items-center'>
              {/* <h1 className='me-3'>All Video Cards</h1> */}
              <AddVideos setUploadVideoServerResponse={setUploadVideoServerResponse} />
            </div>

          </Col>

          <Col lg={2}>
            <Link style={{ textDecoration: 'none', fontSize: '20px' }} to={'/watch-history'}>Watch History</Link>
          </Col>
        </Row>

        <Row>
          <Col lg={9}>
            <ViewVideos uploadVideoServerResponse={uploadVideoServerResponse} />
          </Col>

          <Col lg={3}>
            <AddCategory setAddCategoryResponse={setAddCategoryResponse} />
            <ViewCategory addCategoryResponse={addCategoryResponse}  />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home