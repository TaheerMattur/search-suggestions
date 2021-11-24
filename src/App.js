import './App.css';
import { useState, useEffect } from "react";
import Users from "./Components/Users";
import Input from "./Components/Input"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchedData = async() => {
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUser(data));
    }
    fetchedData();
  })

  const handleClick = () => {
    setSuggestions([]);
  }

  return (
    <div className="App" onClick={handleClick}>
       <div className="input">
        <Input search={search} setSearch={setSearch} user={user} suggestions={suggestions} setSuggestions={setSuggestions}/>
      </div>
      <div className="header">
        <Users user={user} search={search}/>
      </div>
    </div>
  );
}

export default App;
