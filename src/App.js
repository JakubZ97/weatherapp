import './App.scss'
import Header from './components/Header';
import Section from './components/Section';
import Today from './components/Today';
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
      <>
        {today &&
        <Section 
          title={ 'Now' }
          component={ 
            <Today
              today = { today }
              fahrenheitToCelsius = { fahrenheitToCelsius }
            />
          }
        />
        }
      </>
    </div>
  );
}

export default App;
