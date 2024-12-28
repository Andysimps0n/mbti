import React from 'react'

export default function Header({currentQuestionNumber}) {
  return (
    <div className="progress-bar">
        <div className="progress-shower" style={{width : `${10 * currentQuestionNumber}%`}}></div>
    </div>
  )
}
