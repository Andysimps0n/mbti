"use client"
import React from 'react'
 
import { useRouter } from 'next/navigation'
function page() {

    const router = useRouter()



    setInterval(() => {
      router.push('/result')
    }, 3000);
  return (
    <div className='main-cover border'>

        this is loding
    </div>
  )
}

export default page
