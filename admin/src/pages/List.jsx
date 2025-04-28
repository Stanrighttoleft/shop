import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import axios from 'axios'

const List = () => {
  const [list,setList]=useState([])
  const fetchList=async()=>{
    try {
      const response =await axios.get(backendUrl+'/api/product/list')
      console.log(response.data);
      
    } catch (error) {
      
    }

  }

  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div>List</div>
  )
}

export default List