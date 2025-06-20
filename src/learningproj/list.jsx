import React from 'react'

function List() {

    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    const items = fruits.map(fruit => <li>{fruit}</li>);
  return (
    <ul>{items}</ul>
  )

}

export default List