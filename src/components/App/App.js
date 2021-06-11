import { useState, useEffect } from 'react';
import { getSearchResults } from '../../api';
import FilterButtons from '../FilterButtons/FilterButtons.js'
import CardHolder from '../CardHolder/CardHolder';
import './App.css';

function App() {

  const [filter, setFilter] = useState('home')
  const [results, setResults] = useState([])
  const [mounted, setMounted] = useState(true)
  const [error, setError] = useState('')

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
      <FilterButtons filter={filter} setFilter={setFilter} getCategoryResults={getCategoryResults}/>
      <CardHolder results={results} error={error} />
    </>
  );
}

export default App;
