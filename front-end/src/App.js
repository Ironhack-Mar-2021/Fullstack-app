import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [message, setMessage] = useState("")

  function handleChange(e) {
    setMessage(e.target.value)

    console.log(message)
  }

  return (
    <div className="App">
      <h1>Class Blog</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <button type='submit' >Submit</button>
      </form>
    </div>
  );
}

export default App;
