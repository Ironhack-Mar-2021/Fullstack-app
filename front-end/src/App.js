import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  function handleChange(e) {
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
