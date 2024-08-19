import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchhistory, getHistory } from '../services/Allapi'

function Watchhistory() {
  const [allHistory,setAllHistory]= useState([])
  const getWatchHistory = async()=>{
    const {data} = await getHistory();
    console.log('====watch history response======');
    console.log(data);
    setAllHistory(data)
    
    
  }

  useEffect(()=>{
    getWatchHistory();
  },[])

  const handleDelete = async(historyID)=>{
    await deleteWatchhistory(historyID)
    getWatchHistory()
  }
  return (
    <>
      <div className='textStyle container mt-5 d-flex justify-content-between'>
        <h3 className='textStyle'>WATCH HISTORY</h3>
        <Link to='/home'
          style={{ textDecoration: 'none', color: 'white', fontWeight: '750' }}> <i class="fa-solid fa-arrow-left me-2"></i>
          Back to home</Link>
      </div>
      <table className='table container mb-5 mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time stamp</th>
            <th>Action</th>
          </tr>
        </thead>
{
  allHistory.length > 0 ? (
    allHistory.map((item) => (
      <tbody className='textStyle'>
        <tr>
        <td>{item.id}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.timestamp}</td>


          <td><i className="fa-solid fa-trash" onClick={()=>handleDelete(item.id)}></i></td>
        </tr>
      </tbody>
    ))
  ) : null
}

      

      </table>
    </>
  )
}

export default Watchhistory