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

	const renderEveryTwoHour = (hour) => {
		const now = new Date
		const nowHour = Number(now.getHours())
		hour = Number(hour.datetime.split(':')[0])

		return (nowHour + hour) % 2 == 0
	}

  return (
    <ol className='next-day'>
			{next().map(hour => {
				if (renderEveryTwoHour(hour)){
					return <NextDayLi key={hour.datetimeEpoch} hour={ hour } fahrenheitToCelsius = { fahrenheitToCelsius }/>
				}
			})}
	  </ol>
  )
}

export default NextDay