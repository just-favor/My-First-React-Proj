import React, {useState} from 'react'

function Colors() {

    const [colors, setColors] = useState('red')
    function changeColor(e) {
        setColors(e.target.value)
    }

  return (
    <div className="color-container">
        <h1>Colors</h1>
        <div className="colorbox"  style={{backgroundColor: colors}}>
        </div>
        <input type="color" onChange={changeColor}/>
    </div>
  )
}
export default Colors