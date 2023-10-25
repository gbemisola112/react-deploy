import React, {useEffect, useState} from 'react'
import axios from 'axios'

const UseEfeect =() => {
    const [data, setdata] = useState([])
    const URL = "https://api.github.com/users"
const getdata=()=>{
    axios.get(URL).then((response) =>{
        console.log(response.data);
        setdata(response.data)
    });
};
useEffect(()=>{
    console.log("first");
},[])
  return (
    <div>
        <button onClick={getdata}>Getdata</button>
        {data.map((item) =>{
            return <h1>{item.login}</h1>
        })}
    </div>
  )
}

export default UseEfeect