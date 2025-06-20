import React, { useState } from 'react'


function State() {

    const [name, setName] = useState('Ogbewe Favour')
    const [age, setAge] = useState(17)
    const [color, setColor] = useState(true)

function changeName(){
    setName('Just Favor')
}

function change() {
    setAge(age +1)
  }

function changeColor() {
    setColor(!color);
}


  return (
    <div>
        <h1>My Name is {name} and i am {age}</h1>
        <button onClick={change}>Change Age</button>
        <button onClick={changeName}>Change Name</button>
        <hr />

        <div onClick={changeColor} style={{backgroundColor: `${color === true? 'red': 'blue'}`, width: '10rem', height: '10rem',
             margin: '5rem auto', borderRadius: '100%', boxShadow: '0 0 10px black'}}></div>
    </div>
  )
}

export default State