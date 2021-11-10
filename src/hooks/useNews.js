import { useState, useEffect } from "react"
const axios = require("axios")
const apiKey = "6ebac5b342f7435b978adc166b037201"
const topic = "Car"
const reqUrl =
  "https://newsapi.org/v2/everything?q=" +
  topic +
  "&sortBy=popularity&apiKey=" +
  apiKey

const useNews = () => {
  const [topic, setTopic] = useState("Car")
  const [articles, setArticles] = useState()
  useEffect(() => {
    axios
      .get(reqUrl)
      .then(function (response) {
        // handle success
        setArticles(response.data.articles)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])
  return {articles, topic}
}

export default useNews
