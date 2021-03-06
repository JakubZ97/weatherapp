import React from 'react'

function Today({ today, fahrenheitToCelsius }) {

  const getIcon = () => {
    const currentDate = new Date()
    return today.hours[currentDate.getHours()].icon
  }

  const getDescription = () => {
    return getIcon().split('-').join(' ')
  }

  return (
    <div className='container today'>
        <img
            src={require(`../assets/weatherIcons/${getIcon()}.svg`)}
            alt={today.description}
        />
        <p>
          <span className='day'>
            { fahrenheitToCelsius(today.tempmax) }&deg; 
          </span>
          /
          <span className='night'>
            { fahrenheitToCelsius(today.tempmin) }&deg;
          </span>
        </p>
        <p>
          { getDescription() }
        </p>
    </div>
  )
}

export default Today