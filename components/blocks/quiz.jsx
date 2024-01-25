import { useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

export default function Quiz({ props }) {

  const { question, answers } = props

  const [message, setMessage] = useState(null)
  const [chosenAnswer, setChosenAnswer] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)

  function checkAnswer(answer) {
    if (answer.isCorrect) {
      setCorrectAnswer(true)
      setChosenAnswer(answer.text)
      setMessage('You got the answer right!')
    } else {
      setCorrectAnswer(false)
      setChosenAnswer(answer.text)
      setMessage('You got the answer wrong!')
    }
  }

  return (
    <div className='my-[20px]'>
      <div className='relative flex flex-col p-[60px] bg-zinc-900 text-white'>
        <div className="text-[22px]">
          {question}
        </div>
        <div className="mt-[20px] pb-[16px] flex flex-col gap-[12px]">
          {answers.map((answer) => (
            <button 
              key={answer._key}
              onClick={() => checkAnswer(answer)}
              className='relative p-[12px] text-left transition bg-zinc-800 hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-800'
            >
              <span>
                {answer.text} 
              </span>
              <>
                {correctAnswer && answer.isCorrect && <CorrectAnswerIcon />}
                {!correctAnswer && chosenAnswer === answer.text && <WrongAnswerIcon />}
              </>
            </button>
          ))}
        </div>
        {message && (
          <Message 
            message={message} 
            correctAnswer={correctAnswer} 
          />
        )}
      </div>
    </div>
  )
}

function CorrectAnswerIcon() {
  return (
    <FaCircleCheck style={{
      position: 'absolute',
      top: '14px',
      right: '18px',
      fontSize: '20px',
      color: '#72D673',
    }}/>
  )
}

function WrongAnswerIcon() {
  return (
    <FaCircleXmark style={{
      position: 'absolute',
      top: '14px',
      right: '18px',
      fontSize: '20px',
      color: '#ea7575',
    }}/>
  )
}

function Message({message, correctAnswer }) {
   return (
    <div className="absolute bottom-[28px] left-1/2 transform -translate-x-1/2 text-center">
      <div style={{ color: correctAnswer ? '#72d673' : '#ea7575' }}>
        {message}
      </div>
    </div>
   )
}
