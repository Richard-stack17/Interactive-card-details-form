import { useState } from 'react'
import './App.css'
import FormCard from './components/FormCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Probanding</h1>
      <FormCard/>
    </div>
  )
}

export default App
