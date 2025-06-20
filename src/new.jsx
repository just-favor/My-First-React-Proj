import React, { useEffect, useState } from 'react'

function New() {

    const [advice, setAdvice] = useState('Click the button to get advice!');

    const [count, setCount] = useState(0);

    async function changMe() {
        const advice = await fetch('https://api.adviceslip.com/advice')
        const data = await advice.json()
        setAdvice(data.slip.advice)
        setCount(count + 1);
    }

    const [data, setData] = useState([])
    
        const fetchData = async () => {
            const rays = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await rays.json();
            setData(json);
        }
        useEffect(()=> {
            fetchData()
        }, [])

  return (
    <div className="new">

        <h1>{advice}</h1>
        <p>you've got {count <= 10 ? `${count}` : 'enough' } advice</p>
        <button onClick={changMe}>Click</button>
        <hr style={{border: '2px solid black'}}/>




        
        <button onClick={fetchData}>pick out</button>
        <div>{data.map((tx) =>{
            return(
                <div key = {tx.id}>
                    <p>{tx.id}</p>
                    <p>{tx.title}</p>
                    <p>{tx.body}</p>
                    
                </div>
            )
        })}
        </div>
    </div>
  )
}


export default New