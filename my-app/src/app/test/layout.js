'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Page from './page';
import Loding from './Loding'

export default function layout({ children }) {

    const [currentQuestionNumber, setcurrentQuestionNumber] = useState(0);
    const [needs, setneeds] = useState({
    physical : 0,
    safety : 0,
    love : 0,
    selfEsteem : 0,
    selfActualization : 0
    });


  return (
    <>
        {currentQuestionNumber < 9 ? 
            <>
                <div className="main-cover border">
                    <Header currentQuestionNumber={currentQuestionNumber}></Header>
                    <Page
                        currentQuestionNumber={currentQuestionNumber}
                        setcurrentQuestionNumber={setcurrentQuestionNumber}
                        needs={needs}
                        setneeds={setneeds}
                    ></Page> 
                </div>

            </> : 
            <Loding needs={needs}></Loding>
        }
    </>
  )
}
