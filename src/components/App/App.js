import { useState, useEffect } from 'react';
import { getSearchResults } from '../../api';
import './App.css';

function App() {

const [filter, setFilter] = useState('home')
const [results, setResults] = useState([])
const [error, setError] = useState('initialState')


  useEffect(() => {
    let mounted = true;
    getSearchResults(filter)
    .then(res => {
      if(mounted) {
        setResults(res.results)
      }
    })
    console.log(results)
    return () => mounted = false;
  })

  return (
    <p>results</p>
  );
}

export default App;
