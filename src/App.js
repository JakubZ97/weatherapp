import './App.scss'
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const API_KEY = 'DPYN64R6MPM64Z3MW8W78EGEM'
  const [data, setData] = useState()
  const [statusCode, setStatusCode] = useState()

  return (
    <div className="App">
      <Header 
        API_KEY = { API_KEY }
        setData = { setData }
        setStatusCode = { setStatusCode }
      />
      
    </div>
  );
}

export default App;
