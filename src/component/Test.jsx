import axios from 'axios'
import React from 'react'

const Test = () => {
    let url = "http://localhost:3050/user/signup"

    const clickMe =()=>{
        axios.post(url, {firstName: "Wale",lastName:"olarewaju",email:"hhj@gmail.com"})
    }
  return (
    <div>
        <button onClick={clickMe} style={{background:"red",borderRadius:"10px"}}>click me</button>
    </div>
  )
}

export default Test