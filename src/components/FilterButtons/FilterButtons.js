import './FilterButtons.css'

const FilterButtons = ({ filter, setFilter, getCategoryResults, locked, setLocked }) => {

  return (
    <form className='dropdown' value={filter} onChange={(e) => {
      setFilter(e.target.value)
      console.log(e.target.value)
      setLocked(false)
    }}>
      <label>Category: </label>
      <select name='filter' id='filter'>
        <option defaultValue value='home'>home</option>
        <option value='arts'>arts</option>
        <option value='automobiles'>automobiles</option>
        <option value='books'>books</option>
        <option value='business'>business</option>
        <option value='fashion'>fashion</option>
        <option value='food'>food</option>
        <option value='health'>health</option>
        <option value='insider'>insider</option>
        <option value='magazine'>magazine</option>
        <option value='movies'>movies</option>
        <option value='nyregion'>nyregion</option>
        <option value='obituaries'>obituaries</option>
        <option value='opinion'>opinion</option>
        <option value='politics'>politics</option>
        <option value='realestate'>realestate</option>
        <option value='science'>science</option>
        <option value='sports'>sports</option>
        <option value='sundayreview'>sundayreview</option>
        <option value='technology'>technology</option>
        <option value='theater'>theater</option>
        <option value='t-magazine'>t-magazine</option>
        <option value='travel'>travel</option>
        <option value='upshot'>upshot</option>
        <option value='us'>us</option>
        <option value='world'>world</option>
      </select>
      <button className='search-button' onClick={(e) => {
        e.preventDefault()
        if (!locked) {
          getCategoryResults(filter)
        }
      }}>search</button>
    </form>
  )
}

export default FilterButtons;