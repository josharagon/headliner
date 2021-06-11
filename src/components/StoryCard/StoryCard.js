import './StoryCard.css'

const StoryCard = ({ article }) =>  {
  const date = new Date(article.created_date);
  return (
  <div className='card'>
    <h4>{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}</h4>
    <p className='section'>{article.section}</p>
    <p className='subsection'>{article.subsection}</p>
    <h2>{article.title}</h2>
    <h4>{article.byline}</h4>
    <p>{article.abstract}</p>
  </div>
  )
}

export default StoryCard;