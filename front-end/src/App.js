import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const[ messages, setMessages] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:5000/getMessage')
    .then((res) => setMessages(res.data))
  },[])
  


  function handleChange(e) {
    console.log(messages)
    setMessage(e.target.value);
    console.log(message);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000", { message });
  }

  return (
    <div className="App">
      <h1>Class Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;
