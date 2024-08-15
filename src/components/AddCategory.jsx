import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { addCategoryAPI } from '../services/allAPI';

function AddCategory({setAddCategoryResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [category, setCategory] = useState({
    categoryId:"",
    categoryName: "",
    allVideos:[]
  })

  const handleAddCategory = async () => {
    //api call
    await addCategoryAPI(category)
    setAddCategoryResponse(category)
    handleClose()
  }
  console.log(category);

  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-primary'>Add Category</button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following Details!!!</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicVideoId">
              <Form.Control type="text" placeholder="Enter Category ID" onChange={(e) => setCategory({ ...category, categoryId: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicVideoId">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategory({ ...category, categoryName: e.target.value })} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCategory