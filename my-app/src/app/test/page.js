'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Loding from '../Loding'

function Page() {


  const [currentQuestionNumber, setcurrentQuestionNumber] = useState(0);

  const [needs, setneeds] = useState({
    physical : 2,
    safety : 2,
    love : 2,
    selfEsteem : 2,
    selfActualization : 2
  });

  const router = useRouter()
  
  const handleButtonClick = (location) => {
    if (currentQuestionNumber < 10) {

      const addingNumber = location == 'top' ? 0 : -1

      const rangeToKey = {
        physical: [0, 1],
        safety: [2, 3],
        love: [4, 5],
        selfEsteem: [6, 7],
        selfActualization: [8, 9]
      };      

      // Returns need that the question if about
      const key = Object.keys(rangeToKey).find((k)=>rangeToKey[k].includes(currentQuestionNumber))

      if (key) { setneeds( (prev)=>({
        ...prev,
        [key]: prev[key] + addingNumber
      })) }
      setcurrentQuestionNumber((prevState) => prevState + 1)
    }
  }



  const questions = [
    {
      question: "당신은 PT를 받는 사람입니다. 길에서 만난   트레이너가 나의 식단을 물었을 때 나는",
      option: ["당당히 걸어간다", "들고있던 치킨을 숨긴다"]
    },
    {
      question: "피곤한 월요일 아침, 당신의 눈 앞에 빈백이 보입니다.",
      option: ["다음 수업을 준비하기 위해 지나친다", "묻지도 따지지도 않고 눕는다"]
    },
    {
      question: "학교에서 최저 시급 받으며 1주일 살기 (밥 무한 인터넷 무한)",
      option: ["가능", "불가능"]
    },
    {
      question: "복도를 지나가다가 친구가 괴롭힘 당하는 것을 봤다.",
      option: ["선생님한테 알린다", "지나친다"]
    },
    {
      question: "아무에게도 말하지 못하는 고민이 있을 때 나는",
      option: ["가장 친한 친구에게 말한다", "혼자 해결한다"]
    },
    {
      question: "나랑 가장 친한 친구는",
      option: ["학교에 있다", "인터넷에 있다"]
    },
    {
      question: "모둠 과제를 하면서 당신이 의견을 제시할 때 모둠원의 반응은",
      option: ["자신의 말을 경청해준다", "별 말 아니겠지 하면서 무시한다"]
    },
    {
      question: "발표에서 대본 숙지를 못해 점수를 잘 못 받은 당신, 자신에게 할 말은?",
      option: ["다음 발표에서는 대본 숙지를 잘 해야겠다", "너는 잘 하는게 없어"]
    },
    {
      question: "나는 내 삶의 목표와 방향을 분명히 이해하고 있나요?",
      option: ["예", "아니오"]
    },
    {
      question: "내 삶에서 지속적으로 성장하고 배우고 있다는 느낌이 드나요?",
      option: ["예", "아니오"]
    }
  ];
  

  return (
    <div className="main-cover border">
        {currentQuestionNumber <= 9 ?
      <div className="progress-bar">
          <div className="progress-shower" style={{width : `${10 * currentQuestionNumber}%`}}></div>
      </div>
         : null}

      {currentQuestionNumber <= 9 ?
      <>
      <div className="question-container">{questions[currentQuestionNumber].question}</div>

      <div className="button-container">
        <div className="button" onClick={()=>{handleButtonClick('top')}}>{questions[currentQuestionNumber].option[0]}</div>
        <div className="button" onClick={()=>{handleButtonClick('bottom')}}>{questions[currentQuestionNumber].option[1]}</div>
      </div>
      </>
    : null}

    {currentQuestionNumber <= 9 ? null : 
      <Loding needs={needs}></Loding>
    }


    </div>
  )
}

export default Page
