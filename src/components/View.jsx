import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllvideos } from '../services/Allapi'
import { Col, Row } from 'react-bootstrap'

function View({ uploadVideoStatus }) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getVideos = async () => {
    const response = await getAllvideos();
    console.log('=======all videos=======');
    const { data } = response;
    setAllVideos(data)
  }

  useEffect(() => {
    getVideos()
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus])

  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos?.map((videos) => (
              <Col sm={4}>
                <VideoCard displayVideo={videos} setDeleteVideoStatus={setDeleteVideoStatus} />
              </Col>
            )) :
            <p>No videos available</p>
        }
      </Row>
    </>
  )
}

export default View
