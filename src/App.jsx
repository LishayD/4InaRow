import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './components/homepage'
import Rules from './components/Rules'

function App() {
  const [currentPage, setPage] = useState('home')

  return (
    <div className="App">
      {currentPage === 'home' && <Homepage onClick={() => setPage('rules')} />}
      {currentPage === 'rules' && <Rules onClick={() => setPage('home')} />}



    </div>
  )
}

export default App
