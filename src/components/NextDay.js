import React from 'react'
import NextDayLi from './NextDayLi'

function NextDay({ today, data, fahrenheitToCelsius }) {

	const next = () => {
		const date = new Date 
		const currentHour = date.getHours()

		let arr = today.hours.slice(currentHour + 1, -1)
		arr = arr.concat(data[0].hours.slice(0, 24 - arr.length))

		return arr
	}

  return (
    <ol className='next-day'>
			{next().map(hour => {
				return <NextDayLi key={hour.datetimeEpoch} hour={ hour } fahrenheitToCelsius = { fahrenheitToCelsius }/>
			})}
	  </ol>
  )
}

export default NextDay