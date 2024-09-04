import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => setJokes(res.data))
      .catch(err => console.log(err))
  },)

  return (
    <div className='main'>
      <h1>Jokes will be here</h1>
      <p>{jokes.length}</p>
      {jokes.map(jokeItem => (
        <div key={jokeItem.id} className="joke-item">
          <h3>{jokeItem.joke}</h3>
          <p>{jokeItem.punchline}</p>
        </div>
      ))}

    </div>
  )
}

export default App