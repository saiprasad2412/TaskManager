import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const user='';
  const {register, handleSubmit , formState:{errors}}=useForm()

  const navigate =useNavigate()
  useEffect(()=>{
    user && navigate("/dashboard")
  },[user])
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
        <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>

        </div>
      </div>
    </>
  )
}

export default Login