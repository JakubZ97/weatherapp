import React from 'react'

function NextWeekLi({ day, fahrenheitToCelsius }) {

  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const getDayNumber = () => {
    const now = new Date(day.datetime)
    return now.getDay()
  }

  return (
    <li>
      <p>
        {days[getDayNumber()]}
      </p>
      <img
        src={`/assets/weatherIcons/${day.icon}.svg`}
        alt={day.icon.split('-').join(' ')}
      />
      <p>
        <span>{ fahrenheitToCelsius(day.tempmax) }&deg;</span>/<span>{ fahrenheitToCelsius(day.tempmin) }&deg;</span>
      </p>
    </li>
  )
}

export default NextWeekLi