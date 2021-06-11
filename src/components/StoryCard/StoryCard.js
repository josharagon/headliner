import './StoryCard.css'

const StoryCard = ({ article }) =>  {
  {console.log(article)}
  return (
  <div className='card'>
    <p className='section'>{article.section}</p>
    <p className='subsection'>{article.subsection}</p>
    <h2>{article.title}</h2>
    <h4>{article.byline}</h4>
    <p>{article.abstract}</p>
  </div>
  )
}

export default StoryCard;