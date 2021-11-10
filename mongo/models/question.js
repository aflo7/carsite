const mongoose = require("mongoose")
const url = process.env.MONGO_URL

console.log("connecting to", url)

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message)
  })

const questionArrSchema = new mongoose.Schema({
  questions: [{ question: String, answer: String }]
})

const questionSchema = new mongoose.Schema({
  question: String,
  answer: String
})

module.exports = {
  QuestionArr: mongoose.model("QuestionArr", questionArrSchema),
  Question: mongoose.model("Question", questionSchema)
}
