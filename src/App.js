import { useState } from "react";
import "./styles.css";

//var userName=prompt("Please enter your name");
//var userName = "All";
var color = "red";
var count = 0;
var shopList = ["milk", "egg", "bread", "oil", "panner", "chicken", "meat"];

export default function App() {
  const [likeCounter, setlikeCounter] = useState(0);
  const [enteredName, setEnteredName] = useState("All");

  function clickHandler() {
    count = count + 1;
    setlikeCounter(count);
  }
  function changeName(event) {
    setEnteredName(event.target.value);
  }
  function listClicked(item) {
    setEnteredName(item);
  }
  return (
    <div className="App">
      <h1 style={{ color: color }}>Welcome {enteredName}</h1>
      {likeCounter}
      <br></br>
      <button onClick={clickHandler}>Click me</button>
      <br></br>
      <input onChange={changeName} placeholder="Enter name"></input>
      <ul>
        {shopList.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <li onClick={() => listClicked(item)} key={item}>
                {item}
              </li>
            );
          } else {
            return (
              <li
                key={item}
                onClick={() => listClicked(item)}
                style={{ color: color }}
              >
                {item}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
