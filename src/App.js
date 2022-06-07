import './App.scss'
import Header from './components/Header';
import Main from './components/Main';
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
      <Main
        today = { today }
        data = { data }
        fahrenheitToCelsius = { fahrenheitToCelsius }
      />}
    </div>
  );
}

export default App;
