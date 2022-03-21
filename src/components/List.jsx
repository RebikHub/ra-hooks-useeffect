import React from 'react';

export default function List(props) {
  return (
    <ul className="list">
      {props.list.map((el) => 
      <li key={el.id} onClick={() => props.handleClick(el)}>
        {el.name}
      </li>)}
    </ul>
  );
}
