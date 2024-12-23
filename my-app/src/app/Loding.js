import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Loding() {

    const router = useRouter()
    useEffect(()=>{
        setInterval(()=>(
            router.push('/result')
        ), 3000)
    })

  return (
    <div className="loding-container">
      <div className="loading-text">분석중...</div>
      <div className="loading"></div>
    </div>
  )
}

export default Loding
