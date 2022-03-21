import React, { useEffect, useState } from "react";

export default function App() {
const [list, setList] = useState([])
const [id, setId] = useState()
useEffect(() => {
  fetch(process.env.REACT_APP_DATA_URL)
    .then(response => response.json())
    .then(data => setList(data))
}, [])

useEffect(() => {
  console.log(process.env.REACT_APP_ID_URL + `${id}.json`);
  fetch(process.env.REACT_APP_ID_URL + `${id}.json`)
    .then(response => response.json())
    .then(data => setList(data))
}, [id])

function handleClick(id) {
  console.log(id);
  setId(id)
}

  return (
    <div className="App">
      <ul className="list">
        {list.map((el) => <li key={el.id} onClick={() => handleClick(el.id)}>{el.name}</li>)}
      </ul>
    </div>
  );
}
