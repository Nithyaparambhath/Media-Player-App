import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../services/allAPI';
function AddVideos({ setUploadVideoServerResponse }) {

  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    embededLink: ""

  })

  console.log(video);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e) => {
    const { value } = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({ ...video, embededLink: link })
  }

  const handleUploadVideo = async () => {
    const { id, caption, url, embededLink } = video
    if (!id || !caption || !url || !embededLink) {
      alert("Please Fill the form completely")
    }
    //api call
    const response = await uploadVideoAPI(video)
    console.log(response);
    if (response.status >= 200 && response.status <= 300) {
      alert(`${response.data.caption} video uploaded successfully!!!`)
      //server response
      setUploadVideoServerResponse(response.data)
      setVideo({
        id: "",
        caption: "",
        url: "",
        embededLink: ""
    
      })
      handleClose()
    } else {
      console.log(response);
      alert("Please provide unique id for uploadeing videos...")
    }

  }

  return (
    <div className='d-flex me-3'>
      <h2 className='me-3'>Upload New Videos</h2>
      <button onClick={handleShow} className='border rounded bg-dark p-2 text-primary' ><i class="fa-solid fa-plus"></i></button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following Details!!!</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicVideoId">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVideoId">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVideoId">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVideoId">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddVideos