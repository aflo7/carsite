import React, { useEffect, useState } from "react"
import axios from "axios"
import "../css/chat.css"

const ChatBtn = () => {
  const [showChatBox, setShowChatBox] = useState(false)
  const [questionArr, setQuestionArr] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3100/chat/questions/")
      .then((res) => {
        // console.log(res.data[0].questions)
        setQuestionArr(res.data[0].questions)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div id="append-chat-btn">
      {showChatBox ? (
        <div className="chat-box">
          <div className="append-questions">
            <ChatBox questionArr={questionArr} />
          </div>
        </div>
      ) : null}

      <button
        className="chat-btn"
        onClick={() => setShowChatBox((prev) => !prev)}
      >
        Chat
      </button>
    </div>
  )
}

const ChatBox = ({ questionArr }) => {
  return (
    <>
      {questionArr.map((question, i) => (
        <ChatQuestion key={i} question={question} uniqueKey={i} />
      ))}
    </>
  )
}

const ChatQuestion = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="chat-question-btn">
      <div
        className="question-btn"
        onClick={() => setShowAnswer((prev) => !prev)}
      >
        {question.question}
      </div>

      {showAnswer ? <div className="chat-answer">{question.answer}</div> : null}
    </div>
  )
}

export default ChatBtn
