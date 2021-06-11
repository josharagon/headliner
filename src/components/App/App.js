import { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { getSearchResults } from '../../api';
import FilterButtons from '../FilterButtons/FilterButtons.js'
import CardHolder from '../CardHolder/CardHolder.js';
import SingleStoryView from '../SingleStoryView/SingleStoryView.js'
import './App.css';

function App() {

  const [filter, setFilter] = useState('home')
  const [results, setResults] = useState([])
  const [mounted, setMounted] = useState(true)
  const [error, setError] = useState('')
  const [currentStory, setCurrentStory] = useState(null)

  const getCategoryResults = (term) => {
    getSearchResults(term)
      .then(res => {
        setResults(res.results)
      })
      .catch(err => setError(err))
  }

  useEffect(() => {
    if (mounted) {
      getCategoryResults(filter);
    }
    setMounted(false);
  }, [mounted, filter])

  return (
    <>
      <Link to='/'>
        <h1 className='header'>Headliner</h1>
      </Link>
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <>
              <FilterButtons filter={filter} setFilter={setFilter} getCategoryResults={getCategoryResults} />
              <CardHolder results={results} error={error} setCurrentStory={setCurrentStory}/>
            </>
          )
        }} />
        <Route exact path='/story/:id' render={({ match }) =>
          <SingleStoryView time={match.params.id} story={currentStory}/>
        } />
      </Switch>
    </>
  );
}

export default App;
