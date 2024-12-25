'use client'
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import Loding from '../Loding'

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
            {needs? 
            <>
              <div style={{height : `${10 + Number(needs.physical) * 40}%`}} className="resultbar"></div>
              <div style={{height : `${10 + Number(needs.safety) * 40}%`}} className="resultbar"></div>
              <div style={{height : `${10 + Number(needs.love) * 40}%`}} className="resultbar"></div>
              <div style={{height : `${10 + Number(needs.selfEsteem) * 40}%`}} className="resultbar"></div>
              <div style={{height : `${10 + Number(needs.selfActualization) * 40}%`}} className="resultbar"></div>
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

export function PageComponent () {
  return (
    <Suspense fallback={<Loding></Loding>}>
      <Page></Page>
    </Suspense>
  )
}
