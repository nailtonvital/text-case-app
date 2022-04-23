import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")

  const resultText = (text) =>{
    return text
  }   

  return (
    <div className="App">
      <h1>Text Case</h1>
      <input type={"text"}  onChange={(t) => setText(t.target.value)} />
      <div>
        <h4>UpperCase</h4>
        {text.toUpperCase()}
      </div>
      <div>
        <h4>LowerCase</h4>
        {text.toLowerCase()}
      </div>

      <div>
        <h4>Without Space</h4>
        {text.replace(/ /g, '')}
      </div>

   
    </div>
  )
}

export default App
