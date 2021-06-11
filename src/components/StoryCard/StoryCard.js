import './StoryCard.css';
import { Link } from 'react-router-dom';


const StoryCard = ({ article, setCurrentStory }) => {
  const backImage = {
    backgroundImage: `url(${article.multimedia ? article.multimedia[0].url : null})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const date = new Date(article.created_date);
  return (
    <Link to={`/story/${date.getTime()}`} onClick={() => {
      setCurrentStory(article);
    }}>
      <div className='card' style={backImage}>
        <h4>{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}</h4>
        <p className='section'>{article.section}</p>
        <p className='subsection'>{article.subsection}</p>
        <h2>{article.title}</h2>
        <h4>{article.byline}</h4>
        <p>{article.abstract}</p>
      </div>
    </Link>
  )
}

export default StoryCard;