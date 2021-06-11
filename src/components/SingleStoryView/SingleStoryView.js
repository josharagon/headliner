import React from 'react';
import './SingleStoryView.css';
import { useHistory } from 'react-router-dom';


const SingleStoryView = ({ story }) => {
  let history = useHistory();

  return (
    <div className='single-story-view'>
      <h4 className='go-back' onClick={() => history.goBack()}>Go Back ←</h4>
      <h1>{story.title}</h1>
      <p className='story-byline'>{story.byline}</p>
      <h3>{story.abstract}</h3>
      <div className='img-container'>
      <img src={story.multimedia ? story.multimedia[0].url : null} className='story-img' alt={story.multimedia[0].caption}></img>
      <p className='img-caption'>{story.multimedia ? story.multimedia[0].caption : null} </p>
      </div>
    </div> 
  )
}

export default SingleStoryView;