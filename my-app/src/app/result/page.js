'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react'


function Page() {

  const [needs, setNeeds] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
    // Extract query parameters and set them in state
    const queryParams = Object.fromEntries(searchParams.entries());
    setNeeds(queryParams);
  }, [searchParams]);

  useEffect(() => {
    console.log(needs); // Logs the updated state
    console.log(Number(needs.physical));
    
  }, [needs]); // Runs when `needs` changes

  return (
    <div className='main-cover border'>
      <div className="result-wrapper">
        <div className="result-title">매슬로우의 욕구 충족 단계</div>
        <div className="resultbar-wrapper border">
          {needs.physical && needs? 
          <>
            <div style={{height : 60 + Number(needs.physical) * 60}} className="resultbar"></div>
            <div style={{height : 60 + Number(needs.safety) * 60}} className="resultbar"></div>
            <div style={{height : 60 + Number(needs.love) * 60}} className="resultbar"></div>
            <div style={{height : 60 + Number(needs.selfEsteem) * 60}} className="resultbar"></div>
            <div style={{height : 60 + Number(needs.selfActualization) * 60}} className="resultbar"></div>
          </>
        : null}
          </div>
        <div className="tags-wrapper">
          <div className="border tag">생리적 욕구</div>
          <div className="border tag">안전 욕구</div>
          <div className="border tag">소속 욕구</div>
          <div className="border tag">존경 욕구</div>
          <div className="border tag">자아실현 욕구</div>
        </div>
      </div>
    </div>
  )
}

export default Page
