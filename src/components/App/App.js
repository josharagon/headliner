import { useState, useEffect } from 'react';
import { getSearchResults } from '../../api';
import CardHolder from '../CardHolder/CardHolder';
import './App.css';

function App() {

const [filter, setFilter] = useState('home')
const [results, setResults] = useState([])
const [mounted, setMounted] = useState(true)
const [error, setError] = useState('')


  useEffect(() => {
    if(mounted) {
    getSearchResults(filter)
    .then(res => {
        setResults(res.results)
    })
    .catch(err => setError(err))
  }
    setMounted(false);
  })

  return (
    <CardHolder results={results} error={error}/>
  );
}

export default App;
