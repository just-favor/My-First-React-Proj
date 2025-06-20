import React from 'react'

function Header() {
  return (
    <header style={{background: '#1a2d42', color: 'white', borderRadius: '100px', boxShadow: '0 0 10px black', overflow:'hidden', width: '85%',
     position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
     padding:'0.5rem 5rem', zIndex: 1000}}>

        <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', margin: '10px 0'}}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Enquiry</a>
      </nav>
      <h1>My React App</h1>
      <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', margin: '10px 0'}}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Enquiry</a>
      </nav>
    </header>
  )
}

export default Header