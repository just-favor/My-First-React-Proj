import React, { use, useState } from 'react'

function Form() {


    const [name, setName] = useState('Guest');

    const [payment, setPayment] = useState('Payment Method');

    function changName(e) {
        setName(e.target.value);
    }

    

    function paymentMethod(e){
        setPayment(e.target.value);
    }
    
  return (
    <div className="form" style={{backgroundColor: 'lightblue', padding: '20px', borderRadius: '5px',
     width: '50%', margin: ' 10rem auto', minHeight: '30rem', boxShadow: '0 0 10px black'}}>
        <form action="">
            <h1>Welcome {name}</h1>
            <input type="text" placeholder='Your Name'  onChange={changName}/>
        </form>
        <select onChange={paymentMethod}>
            <option value="">Choose payment Method</option>
            <option value="Visa">Visa</option>
            <option value="Master Card">Master Card</option>
            <option value="Debit Card">Debit Card</option>
        </select>
        <p>{payment}</p>
    </div>
  )
}

export default Form;