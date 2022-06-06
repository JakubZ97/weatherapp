import React from 'react'

function Form({ API_KEY, setData, setStatusCode, setToday }) {

  const handleClick = (event) => {
    event.preventDefault()
    const search = document.getElementById('search-city').value
    downloadData(search)
  }

  const downloadData = (city) => {
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`)
    .then(response => {
      setStatusCode(response.ok);
      return response.json();
    })
    .then(json => {
      setToday(json.days.shift())
      setData(json.days)
      //console.log(json.days)
    })
    .catch(err => {
      console.error(err);
    })
  }

  return (
    <form autoComplete='off'>
        <input type='text' placeholder='Search' id='search-city'></input>
        <button 
          type='submit' 
          aria-label='Search button'
          onClick={(event) => { handleClick(event) }}
        >
        </button>
    </form>
  )
}

export default Form