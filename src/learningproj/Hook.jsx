import { useEffect, useState } from "react";

function Effect () {
//react useState
    const [name, setName] = useState(true)
    const [colorName, setColorName] = useState('black')
    const [color, setColor] = useState('black')
    // function changeName(){
    //     setName(!name)
    // }
    const [car, setcar] = useState({
        brand: 'Toyota',
        model: 'Camry',
        year: 2020
    })
    function changeCar() {
        // setcar({
        //     brand: 'Honda',
        //     model: 'Accord',
        //     year: 2021
        // })
        setcar(preState => {
            return{
                ...preState, year: 2025
            }
        })

        //react useEffect
        
    }
    return(
        <>
        <h2>Hello my name is {name === true? 'Favour' : 'Ogbewe'} and my favorite color is <span style={{color:color}}> {colorName}</span> </h2>
        <h1>Welocme to my page</h1>
        <button onClick={() => setName(!name)}>Change name</button>
        <button onClick={() => setColorName('red') (setColor('red'))}>
            Color red</button>
        <button onClick={() => setColorName('blue') (setColor('blue'))}>Color blue</button>
        <button onClick={() => setColorName('yellow') (setColor('yellow'))}>Color yellow</button>
        <button onClick={() => setColorName('black') (setColor('black'))}>Color Black</button>
        <hr style={{border: '2px solid black'}}/>

        <h1>I own a {car.brand} {car.model} from the year {car.year}</h1>
        <button onClick={changeCar}>Change year</button>
        <hr style={{border: '2px solid black'}}/>
        <h3></h3>

        </>
    )
} 

export default Effect;