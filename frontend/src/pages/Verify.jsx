import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


const Verify = () => {
    const {navigate,token, setCartItems, backendUrl}=useContext(ShopContext)
    const [searchParams, setSearchParams]=useSearchParams()
    const success=searchParams.get('success')
    const orderId=searchParams.get('orderId')
    const verifyPayment=async()=>{
        try{
            if(!token){
                return null
            }
            const response=await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}})
            if(response.data.success){
                navigate('/middle')
                setCartItems({})
                
            }else{
                navigate('/cart')
            }
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }    
    }

    useEffect(()=>{
        if(token && success && orderId){
            verifyPayment();

        }
    },[token])

    if (!token) return <div>Loading...</div>;
  return (
    <div>


    </div>
  )
}

export default Verify