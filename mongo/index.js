const express = require("express")
const cors = require("cors")
const { QuestionArr, Question } = require("./models/question")
const PORT = process.env.PORT
const questionArrID = "618bd0683363bb93b04c0226"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/chat/questions", (req, res) => {
  QuestionArr.find({}).then((QuestionArr) => {
    res.json(QuestionArr)
  })
})

app.post("/chat/questions", (request, response, next) => {
  const body = request.body

  if (body.question === undefined || body.answer === undefined) {
    return response.status(400).json({ error: "missing" })
  }

  const question = new QuestionArr({
    questions: [
      {
        question: body.question,
        answer: body.answer
      }
    ]
  })

  question
    .save()
    .then((savedNote) => {
      response.json(savedNote)
    })
    .catch((error) => next(error))
})

app.put("/chat/questions", (request, response, next) => {
  const body = request.body
  if (body.question === undefined || body.answer === undefined) {
    return response.status(400).json({ error: "missing" })
  }
  const newQuestion = new Question({
    question: body.question,
    answer: body.answer
  })

  QuestionArr.findOneAndUpdate(
    { _id: questionArrID },
    { $push: { questions: newQuestion } },
    {
      new: true
    }
  )
    .then((QuestionArr) => response.json(QuestionArr))
    .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
