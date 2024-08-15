import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

import VideoCard from './VideoCard';
import { getAllVideos } from '../services/allAPI';

function ViewVideos({ uploadVideoServerResponse }) {

  const [deleteVideoResponse, setDeleteVideoResponse] = useState(true)

  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [uploadVideoServerResponse, deleteVideoResponse])

  const getVideos = async () => {
    //api call
    const result = await getAllVideos()
    //console.log(result.data);
    setAllVideos(result.data)

  }

  console.log(allVideos);
  return (
    <div className='mt-5'>
      <h3 className='text-primary'>All Videos</h3>
      <Row>
        {
          allVideos.length > 0 ? allVideos.map((data, key) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard data={data} setDeleteVideoResponse={setDeleteVideoResponse} />
            </Col>
          ))
            :
            <p className='text-danger'>Nothing to display</p>
        }


      </Row>

    </div>
  )
}

export default ViewVideos