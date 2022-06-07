import React from 'react'
import NextWeekLi from './NextWeekLi'

function NextWeek({ data, fahrenheitToCelsius }) {
  return (
    <ol className='next-week'>
      {data.slice(0, 7).map(day => {
        console.log(day)

        return <NextWeekLi
          day = { day }
          fahrenheitToCelsius = { fahrenheitToCelsius }
        />
      })}
    </ol>
  )
}

export default NextWeek