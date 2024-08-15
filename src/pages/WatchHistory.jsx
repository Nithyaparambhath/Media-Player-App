import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteAllWatchHistory, deleteWatchHistory, getAllWatchHistory } from '../services/allAPI';

function WatchHistory() {
  // const [deleteHistoryResponse,setDeleteHistoryResponse] = useState(false)

  const [historyDatas,setHistoryDatas] = useState([])
  useEffect(()=>{
    getAllHistory()
     //setDeleteHistoryResponse(false)
    
  },[])

  const getAllHistory = async ()=>{
    const historyDetails = await getAllWatchHistory()
   setHistoryDatas(historyDetails.data)
    
  }
  
  const deleteHistory = async (id)=>{
    //api call
    await deleteWatchHistory(id)
    //setDeleteHistoryResponse(true)
     getAllHistory()
  }

  
  
  
  return (
    <>
      <Container className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2>Watch History</h2>
          <Link to={'/home'} style={{ textDecoration: 'none' }} className='d-flex align-items-center fs-5'>Back to Home <i class="fa-solid fa-arrow-right ms-2"></i></Link>
        </div>
        
        <Table striped bordered hover className='mt-4'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>TimeStamp</th>
            </tr>
          </thead>
          <tbody>
            {historyDatas.length>0?historyDatas?.map((data,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{data?.caption}</td>

              <td> <Link to={data?.embededLink} target="_blank"> {data?.embededLink}</Link>  </td>
              <td>{data?.timeStamp}</td>
              <td><button onClick={()=>deleteHistory(data?.id)} className='btn btn'><i class="fa-solid fa-xmark"></i></button></td>
            </tr>
            ))
            :<div className='text-danger'>Nothing to Display</div>
           }

          </tbody>
        </Table> 
      </Container>
    </>
  )
}

export default WatchHistory