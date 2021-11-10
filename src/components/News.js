import React from "react"
import useNews from "../hooks/useNews"
import "../css/news.css"

const News = () => {
  const newsHook = useNews()

  return (
    <div className="news-wrap">
      <div className="topic-news-title">The Latest {newsHook.topic} News</div>
      <div className="append-news">
        {newsHook.articles
          ? newsHook.articles.map((article, index) => (
              <NewsComponent
                key={index}
                title={article.title}
                img={article.urlToImage}
                url={article.url}
              />
            ))
          : null}
      </div>
    </div>
  )
}

const NewsComponent = ({ title, url, img }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="news-comp">
        <div className="news-comp-title">{title}</div>
        <div className="news-img-wrapper">
          <img src={img} alt="" className="news-img" />
        </div>
      </div>
    </a>
  )
}

export default News
