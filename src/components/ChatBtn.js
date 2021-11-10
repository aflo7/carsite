import React, { useEffect, useState } from "react"
import axios from "axios"
import "../css/chat.css"

const ChatBtn = () => {
  return (
    <div id="append-chat-btn">
      <div className="chat-box">
        <div className="append-questions">
          <ChatBox />
        </div>
      </div>
      <button class="chat-btn">Chat</button>
    </div>
  )
}

const ChatBox = () => {
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
    <>
      {questionArr.map((question, i) => (
        <ChatQuestion key={i} question={question} />
      ))}
    </>
  )
}

const ChatQuestion = ({ question }) => {
  return <div className="question-btn">{question.question}</div>
}

export default ChatBtn
