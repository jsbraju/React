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
