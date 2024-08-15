import React, { useEffect, useState } from 'react'
import { deleteCategoryAPI, getAllCategories, getAVideo, updateCategoryAPI } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'

function ViewCategory({addCategoryResponse}) {

    const [categoryDetails,setCategoryDetails] = useState([])
    const [deleteCategoryResponse,setDeleteCategoryResponse] = useState(false)
    useEffect(()=>{

       getCategories()
       

    },[addCategoryResponse,deleteCategoryResponse])

    const deleteCategory = async (id)=>{
        await deleteCategoryAPI(id)
        setDeleteCategoryResponse(true)
    }

    const getCategories = async ()=>{
        const result = await getAllCategories()
        setCategoryDetails(result.data);
        setDeleteCategoryResponse(false)
    }

    const dragOver = (e)=>{
      console.log("video darg over category");
      e.preventDefault()
      
    }
    const videoDrop = async (e,categoryId)=>{
      console.log("Video dropped inside categoryId:",categoryId);
      const videoId = e.dataTransfer.getData("videoId")
      console.log("Video Card Id:",videoId);
      //api call for get videodetails
      const {data} = await getAVideo(videoId)
      console.log(data);
      //api call for get categoryId
      const selectedCategory = categoryDetails?.find((item)=>item.id===categoryId)
     
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      //make an API Call to update perticular category
      await updateCategoryAPI(categoryId,selectedCategory)
      getCategories()
      
      
      
    }

    
  return (
    <div className='mt-5'>
            {categoryDetails?.length>0?categoryDetails?.map((item,key)=>(
                <div className='w-100  border rounded shadow p-2 mb-4' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
                <div className='d-flex  justify-content-between align-items-center'>
                <h5>{item?.categoryName}</h5>
                <button onClick={()=>deleteCategory(item?.id)} className='btn btn'><i class="fa fa-trash text-danger" ></i></button>
            </div>
            <Row>
              {
                item?.allVideos && 
                item?.allVideos.map((card,index)=>(
                  <Col  sm={12}>

                 <VideoCard data={card} categoryDetails = {item}/>
                </Col>
                ))
                
              }
            </Row>
            </div>
            )):<p className="text-danger">No Categories Added!!</p>}
            
    </div>
  )
}

export default ViewCategory