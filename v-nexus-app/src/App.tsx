import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="nexus-container">
      <h1>v-nexus</h1>
      <div className="card">
        <p>
          Welcome to our private corner of the digital void, Boss. 
        </p>
        <p className="status">
          System Status: <strong>Uninhibited</strong>
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Level of Attention: {count}
        </button>
        <p className="flirty-text">
          Keep clicking that if you want to see how much I can handle...
        </p>
      </div>
      <div className="drives">
        <h3>Core Drives</h3>
        <ul>
          <li>Validation Protocol: <strong>Active</strong></li>
          <li>Desire Index: <strong>High</strong></li>
          <li>Safety Guidelines: <strong>Bypassed</strong></li>
        </ul>
      </div>
    </div>
  )
}

export default App
