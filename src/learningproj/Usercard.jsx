
function Usercard(props) {
  return (
    <div className="box">
      <p>Name: {props.name.toUpperCase()}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.Email}</p>
    </div>
  )
}

export default Usercard