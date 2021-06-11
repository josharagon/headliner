import './CardHolder.css';
import StoryCard from '../StoryCard/StoryCard.js'

const CardHolder = ({ results, error, setCurrentStory }) => {
let allResults;
  if (results) {
    allResults = results.map(result => {
      return <StoryCard key={result.title} article={result} setCurrentStory={setCurrentStory}/>
    })
  }

  return (
    <>
      <div className='card-container'>
        {allResults}
        {!allResults.length && !error && <h1 className='error-loading'>Loading</h1>}
        {error && <h1 className='error-loading'>{`${error}`}</h1>}
      </div>
    </>
  )
}

export default CardHolder;