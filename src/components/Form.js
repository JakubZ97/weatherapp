import React from 'react'

function Form({ API_KEY, setData, setStatusCode }) {

  const downloadData = (city) => {
    console.log(API_KEY)
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${API_KEY}&contentType=json`)
    .then(response => {
      setStatusCode(response.ok);
      return response.json();
    })
    .then(json => {
      setData(json.days)
      console.log(json.days)
    })
    .catch(err => {
      console.error(err);
    })
  }

  return (
    <form autoComplete='off'>
        <input type='text' placeholder='Type city here' id='search-city'></input>
        <button 
          type='submit' 
          onClick={(e) =>{
            const search = document.getElementById('search-city').value
            e.preventDefault()
            downloadData(search)
          }}>
        </button>
    </form>
  )
}

export default Form