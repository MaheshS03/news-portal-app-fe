import React, { useState } from 'react';
import './EditNewsComponent.css';
import axios from 'axios';

const EditNewsComponent = () => {
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

  const titleValidator = () => {
    axios
      .post(`http://localhost:3500/api/v1/news/validate`, {title : newsInfo.title})
      .then(response => {
        setNewsInfo({
          title : response.data.title,
          author : response.data.author,
          date : response.data.date,
          content : response.data.content,
          category : response.data.category,
          genre : response.data.genre,

        })
      })
      .catch(error => {
        if(error.response)
          {
            alert(`Status ${error.response.status} - ${error.response.message}`)
          }
      })
  };

  const formSubmitHandler = (event) => {
    event.preventDefault()

    axios
      .patch(`http://localhost:3500/api/v1/news/`, newsInfo)
      .then(response => {
        alert(`${newsInfo.title} is updated successfully`)
        window.location.href = '/'
      })
      .catch(error => {
        if(error.response)
          {
            alert(`Status ${error.response.status} - ${error.response.message}`)
          }
      })
  };


  const { title, author, date, content, category, genre } = newsInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Updating News</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Give the news title"
          value={title}
          onChange={titleHandler}
          required
        />
      </div>
      <div>
        <button onClick={titleValidator}>Check</button>
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
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditNewsComponent;
