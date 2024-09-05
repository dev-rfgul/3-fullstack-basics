// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './App.css'

// const App = () => {
//   const [jokes, setJokes] = useState([])

//   useEffect(() => {
//     axios.get('/api/jokes')
//       .then(res => setJokes(res.data))
//       .catch(err => console.log(err))
//   },)

//   return (
//     <div className='main'>
//       <h1>Jokes will be here</h1>
//       <p>{jokes.length}</p>
//       {jokes.map(jokeItem => (
//         <div key={jokeItem.id} className="joke-item">
//           <h3>{jokeItem.joke}</h3>
//           <p>{jokeItem.punchline}</p>
//         </div>
//       ))}

//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [randomNo, setRandomNo] = useState(0);

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data)
        const randomNum = Math.floor(Math.random() * res.data.length)
        setRandomNo(randomNum)
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300'>
      <div className='bg-white p-6 rounded-xl shadow-md max-w-lg w-full text-center'>
        <h1 className='text-3xl font-extrabold mb-6 text-blue-900'>Daily Jokes</h1>
        {jokes.length > 0 ? (
          <div className='space-y-4'>
            <p className='text-xl font-semibold text-gray-800'>{jokes[randomNo].joke}</p>
            <p className='text-lg  text-gray-600'>{jokes[randomNo].punchline}</p>
          </div>
        ) : (
          <p className='text-xl font-semibold text-gray-700'>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default App
