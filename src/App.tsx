import { useState } from 'react'
import {Button} from "@mui/material"
import './App.css'

function App() {
  const [disabled, setDisabled] = useState(false)

  return (
    <>    
      <h1>Disable button issue</h1>

      <Button onClick={() => setDisabled(!disabled)} disabled={disabled} variant="text">Click me to disable</Button>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
