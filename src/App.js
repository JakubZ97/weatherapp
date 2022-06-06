import './App.scss'
import Header from './components/Header';
import Section from './components/Section';
//import Today from './components/Today';
import { useState } from 'react';

function App() {
  const API_KEY = 'DPYN64R6MPM64Z3MW8W78EGEM'
  const [today, setToday] = useState()
  const [data, setData] = useState()
  const [statusCode, setStatusCode] = useState()

  return (
    <div className="App">
      <Header 
        API_KEY = { API_KEY }
        setToday = { setToday }
        setData = { setData }
        setStatusCode = { setStatusCode }
      />
      <Section 
        title={ 'Today' }
        //component={ <Today/> }
      />
    </div>
  );
}

export default App;
