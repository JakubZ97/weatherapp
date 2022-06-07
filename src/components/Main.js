import React from 'react'
import Section from './Section';
import Today from './Today';
import NextDay from './NextDay';
import NextWeek from './NextWeek';

function Main({ today, data, fahrenheitToCelsius }) {
  return (
    <main>
    <Section 
      title={ 'Today' }
      component = { 
        <Today
          today = { today }
          fahrenheitToCelsius = { fahrenheitToCelsius }
        />
      }
    />
    <Section 
      title = { 'Next 24 hours' }
        component = { 
        <NextDay
          today = { today }
          data = { data }
          fahrenheitToCelsius = { fahrenheitToCelsius }
        />
      }
    />
    <Section
      title={ 'Next Week' }
      component = {
        <NextWeek 
          data = { data }
          fahrenheitToCelsius = { fahrenheitToCelsius }
        />
      }
    />
  </main>
  )
}

export default Main