"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Loding( { needs } ) {
  const router = useRouter()

  useEffect(()=>{
    const timer = setTimeout (()=> {
      const queryParams = new URLSearchParams(needs).toString();
      router.push(`/result?${queryParams}`);
    }, 1000)

    return () => {clearTimeout(timer)}
  }, [router, needs])

  console.log(needs)
  return (
    <div className="loding-container">
      <div className="loading-text">분석중...</div>
      <div className="loading"></div>
    </div>
  )
}

export default Loding
