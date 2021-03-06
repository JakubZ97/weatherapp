import React from 'react'

function NextDayLi({ hour, fahrenheitToCelsius }) {
  return (
    <li>
      <p>
        {hour.datetime.split('').slice(0, 5).join('')}
      </p>
	    <img 
        src={require(`../assets/weatherIcons/${hour.icon}.svg`)}
        alt={hour.icon.split('-').join(' ')}
      />
	    <p>
	    	{ fahrenheitToCelsius(hour.temp) }&deg;
	    </p> 
    </li>
  )
}

export default NextDayLi