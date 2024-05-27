import React, { useState } from 'react'
import './AddNewNewsComponent.css'
import axios from 'axios'

const AddNewNewsComponent = () => {
  const [newsInfo, setNewsInfo] = useState({
    title : '',
    author : '',
    date : '',
    content : '',
    category : '',
    genre : '',
  });

  const titleHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      title: event.target.value,
    });
  };

  const authorHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      author: event.target.value,
    });
  };

  const dateHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      date: event.target.value,
    });
  };

  const contentHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      content: event.target.value,
    });
  };

  const categoryHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      category: event.target.value,
    });
  };

  const genreHandler = (event) => {
    setNewsInfo({
      ...newsInfo,
      genre: event.target.value,
    });
  };

  const { title, author, date, content, category, genre } = newsInfo;

  const formSubmitHandler = (event) => {
    event.preventDefault()
    
    axios
      .post(`http://localhost:3500/api/v1/news`, newsInfo)
      .then(response => {
        alert(`${response.data.title} is added successfully`)
        window.location.href = '/'
      })
      .catch(error => {
        if(error.response)
          {
            alert(`Status ${error.response.status} - ${error.response.message}`)
          }
      })
  }


  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new News</h2>

      <div className='form-group'>
        <label>News Title</label>
        <input
          type="text"
          placeholder="Give the news title"
          value={title}
          onChange={titleHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Author Name</label>
        <input
          type="text"
          placeholder="Enter the author name"
          value={author}
          onChange={authorHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the date"
          value={date}
          onChange={dateHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Content</label>
        <input
          type="text"
          placeholder="Enter the content"
          value={content}
          onChange={contentHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          placeholder="Enter the category"
          value={category}
          onChange={categoryHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          placeholder="Enter the genre"
          value={genre}
          onChange={genreHandler}
          required
        />
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewNewsComponent;
