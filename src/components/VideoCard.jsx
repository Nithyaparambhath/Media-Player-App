import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addWatchHistory, deleteAVideo, getAllWatchHistory } from '../services/allAPI';

function VideoCard({ data, setDeleteVideoResponse,categoryDetails }) {

    const handleDeleteVideo = async (id) => {
        //api call
        await deleteAVideo(id)
        setDeleteVideoResponse(false)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        console.log(data);
        const {caption, embededLink} = data
        console.log(caption);
        
        const date = new Date()
        console.log(date);
        const timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(date)
        let videoDetails = {
            caption,
            embededLink,
            timeStamp
        }
        //api call
        //get watch history
        const allhistory = await getAllWatchHistory()
       if(allhistory.data.find((item)=>(item.embededLink)===(videoDetails.embededLink))){
        console.log("same video already in watch history so no need to again add to watch history");
        
       }else{
        await addWatchHistory(videoDetails)
        
       }
       setShow(true);
        
        
    }
    const dragStarted = (e,id)=>{
        console.log("Drag Started...card ID:",id);
        console.log(e);
        e.dataTransfer.setData("videoId",id)
    }

    const deleteCategoryVideo = (categoryId,id)=>{
        console.log(id);
        console.log(categoryId);
        
    }
   
console.log(categoryDetails);

    return (
       
        
        <div>
            <Card className='me-3 mt-4' draggable onDragStart={(e)=>dragStarted(e,data?.id)} >
                <Card.Img style={{ height: '120px' }} onClick={handleShow} variant="top" src={data?.url} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>
                        <h6>{data?.caption}</h6>
                        {categoryDetails? <button onClick={()=>deleteCategoryVideo(categoryDetails.id,data?.id)} className='btn'>
                            <i class="fa-solid fa-trash text-danger"></i>
                        </button> :<button onClick={() => handleDeleteVideo(data?.id)} className='btn'>
                            <i class="fa-solid fa-trash text-danger"></i>
                        </button>}
                    </Card.Title>


                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="360" src={`${data?.embededLink}?autoplay=1`}
                        title={data?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default VideoCard