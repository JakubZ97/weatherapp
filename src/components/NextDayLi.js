import React from 'react'

function NextDayLi({ hour, fahrenheitToCelsius }) {
  return (
    <li>
      <p>
        {hour.datetime.split('').slice(0, 5).join('')}
      </p>
	    <img   src={`/assets/weatherIcons/${hour.icon}.svg`}/>
	    <p>
	    	{ fahrenheitToCelsius(hour.temp) }
	    </p> 
    </li>
  )
}

export default NextDayLi