//Passing state from child to parent in React requires a callback function because data typically flows one-way from parent to child. Since the parent owns the state, the child cannot directly modify it but can communicate updates through a function provided by the parent.

// Steps to Pass State from Child to Parent:
// 1. Define state in the parent component.
// 2. Create a function in the parent that updates the state.
// 3. Pass the function as a prop to the child component.
// 4. Call the function inside the child, passing the updated value.



import { useState } from "react";

export default function Parent(){
  const [message,setMessage] = useState("");

  const handleChildData = (data) =>{
    setMessage(data)
  }

  return(
    <div>
      <h2>Parent Component</h2>
      <p>Message From child : {message}</p>y
      <Child sendDataToParent={handleChildData}/>
    </div>
  )
}

const Child = ({sendDataToParent})=> {
  const [data,setData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    sendDataToParent(data)
  }
  return(
    <>
      <h3>Child Component</h3>
      <form>
        <input 
          type="text"
          onChange={(e)=>{setData(e.target.value)}}
        />
        <br/>
        <br/>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Send message to Parent
        </button>
      </form>
    </>
  )
}
