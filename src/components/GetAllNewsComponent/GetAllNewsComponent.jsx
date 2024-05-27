import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './GetAllNewsComponent.css'
import NewsComponent from './NewsComponent'

const GetAllNewsComponent = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3500/api/v1/news')
    .then(response => {
      setNews(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className ='news'>
      {news.map((newsData, index) => (
        <NewsComponent newsData = {newsData} key={index}/>
        ))}
    </div>
  )
}

export default GetAllNewsComponent