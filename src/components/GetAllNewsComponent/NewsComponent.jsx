import React from 'react'

const NewsComponent = ({newsData}) => {
  return (
    <div className='card'>
      <div className='text-container'>
        <h3>{newsData.title}</h3>
        <p className='status'>
          {newsData.author}
        </p>
        <p className="status">
          {newsData.date}
        </p>
        <p className="genre">{newsData.content}</p>
        <p className="status">{newsData.category}</p>
        <p className='date'>{newsData.genre}</p>
      </div>
    </div>
  )
}

export default NewsComponent
