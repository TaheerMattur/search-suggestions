import React from "react";
import './input.css';

const Input = ({ search, setSearch, user, suggestions, setSuggestions}) => {
 
  const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    if(search.length > 0) {
        const filteredUser = user.filter( item => {
          return (
                item.name.toLowerCase().startsWith(search.toLowerCase()) ||
                item.username.toLowerCase().startsWith(search.toLowerCase()) ||
                item.email.toLowerCase().startsWith(search.toLowerCase())
            )
        })
        setSuggestions(filteredUser);
    } else {
        setSuggestions();
    }
  }

  return (
      <form autoComplete="off">
        <input
          type="text"
          value={search}
          placeholder="Search here"
          onChange={handleChange}
        />
        <div className="triggeredData">
            {suggestions && suggestions.map(item => {
                return (
                    <li key={item.id} id="list">{item.name}</li>
                )
            })}
        </div>
      </form>
  );
};

export default Input;
