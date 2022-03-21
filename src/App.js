import React, { useEffect, useState } from "react";
import Details from "./components/Details";
import List from "./components/List";

export default function App() {
const [list, setList] = useState([])
const [info, setInfo] = useState()

useEffect(() => {
  fetch(process.env.REACT_APP_DATA_URL)
    .then(response => response.json())
    .then(data => setList(data))
}, [])

function handleClick(info) {
  console.log(info);
  setInfo(info);
}

  return (
    <div className="App">
      <List list={list} handleClick={handleClick}/>
      {/* <Details info={info}/> */}
    </div>
  );
}
