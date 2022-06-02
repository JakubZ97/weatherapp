import React from 'react'
import Form from './Form'

function Header({API_KEY, setData, setStatusCode, data }) {
  return (
    <header>
        <h1>
          WEATHER APP
        </h1>
        <Form
          API_KEY = { API_KEY }
          setData = { setData }
          setStatusCode = { setStatusCode }
        />
    </header>
  )
}

export default Header