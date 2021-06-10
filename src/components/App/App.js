import { useState, useEffect } from 'react';
import { getSearchResults } from '../../api';
import './App.css';

function App() {

const [filter, setFilter] = useState('home')
const [results, setResults] = useState([])
const [mounted, setMounted] = useState(true)
const [error, setError] = useState('initialState')


  useEffect(() => {
    if(mounted) {
    getSearchResults(filter)
    .then(res => {
        setResults(res.results)
    })
  }
    setMounted(false);
  })

  return (
    <p>results</p>
  );
}

export default App;
