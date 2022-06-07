import './App.scss'
import Header from './components/Header';
import Section from './components/Section';
import Today from './components/Today';
import NextDay from './components/NextDay';
import NextWeek from './components/NextWeek';
import { useState } from 'react';

function App() {
  const API_KEY = 'DPYN64R6MPM64Z3MW8W78EGEM'
  const [today, setToday] = useState()
  const [data, setData] = useState()
  const [statusCode, setStatusCode] = useState()

  const fahrenheitToCelsius = (degree) => {
    return Math.round((degree - 32) / 1.8)
  }

  return (
    <div className="App">
      <Header 
        API_KEY = { API_KEY }
        setToday = { setToday }
        setData = { setData }
        setStatusCode = { setStatusCode }
      />
      {today && 

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
      }
    </div>
  );
}

export default App;
