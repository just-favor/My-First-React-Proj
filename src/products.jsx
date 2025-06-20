import React, {useState, useEffect}from 'react'

function Products() {

const[product, setProduct] = useState([])

async function ProductsSales() {
    const sales = await fetch('https://dummyjson.com/products')
    const json = await sales.json();
    setProduct(json.products)
    console.log(json);
}

useEffect(()=> {
            ProductsSales()
        }, [])


  return (
    <>
    <h1>Products Design</h1>
    {/* <button onClick={ProductsSales}>Show</button> */}
    
    <div className="p">
        {product.map((list) => {
            return(
                <div key={list.id}>
                    <div className="container">
                        <div className="img">
                        <img src={list.images[0]} alt="" />
                        </div>
                        <p><span>Items:</span> {list.title}</p>
                        {/* <p><span>Categories:</span> {list.category}</p> */}
                        <p><span>Price:</span> {list.price}$</p>
                        {/* <p><span>Description:</span> {list.description}</p> */}
                        <button className="buy">Buy</button>
                    </div>
                </div>
            )
        })}
    </div>
    
    </>
  )
}

export default Products