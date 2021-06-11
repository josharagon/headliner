import './CardHolder.css';
import { Link } from 'react-router-dom';

const CardHolder = ({ results, error }) => {
let allResults;
  if (results) {
    allResults = results.map(result => {
      return <p>{result.abstract}</p>
      // return <StoryCard repo={result} key={result.full_name} />
    })
  }


  return (
    <>
      <Link to='/'>
        <h1 className='header'>Headerliner</h1>
      </Link>
      <div className='card-container'>
        {allResults}
        {!allResults.length && !error && <h1 className='error-loading'>Loading</h1>}
        {error && <h1 className='error-loading'>{`${error}`}</h1>}
      </div>
    </>
  )
}

export default CardHolder;