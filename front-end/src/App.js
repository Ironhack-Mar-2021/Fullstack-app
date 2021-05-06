import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const[ messages, setMessages] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:5000/getMessage')
    .then((res) => {
      console.log(res.data);
      setMessages(res.data);
    })
  },[]);

  function ShowMessages() {
    return messages.map((msg) => (
        <div key={msg.__id}>
          {msg.message}
        </div>
      ))
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000", { message })
      .then((res) => setMessages([...messages, res.data]));
  }

  return (
    <div className="App">
      <h1>Class Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ShowMessages/>
    </div>
  );
}


export default App;
