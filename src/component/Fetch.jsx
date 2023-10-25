import React,{useState} from 'react'
import { Axios } from 'axios';
import axios from 'axios';

const Fetch=()=> {
const [data, setdata] = useState([]);
const [predicting, setpredicting] = useState([]);
const [image, setimage] = useState([])
const [name, setname] = useState("")

let endPoint = "https://jsonplaceholder.typicode.com/users"
let endPoint1 = "https://catfact.nija/fact"
let endPoint2 = `https://api.agify.io/?name=${name}`
let endPoint3 = "https://api.github.com/users"

const fetchData = () =>{
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=> response.json())
    .then((data) => setdata(data));
    console.log(data);
}

const predictData =() => {
    axios.get(endPoint2).then((res) =>{
        setpredicting(res.data);
        console.log(res.data.fact);
    })
}
const images = () =>{
    axios.get(endPoint3).then((res)=>{
        setimage(res.data)
    })
}

  return (
    <div>
        <div>
        <div>
            <div>
                <p>{predicting.name}</p>
                <p>{predicting.age}</p>
                <p>{predicting.count}</p>
            </div>
            <input type="text" onChange={(e)=>setname(e.target.value)} />
            <button onClick={predictData}>predict</button>
        </div>
        </div>
        <button onClick={fetchData}>FechData</button>
        {
            data.map((item, index)=>(
                <div key={index}>
                    <h1 >{item.name}</h1>
                </div>
            ))
        }
    <div>
        <button onClick={images}>image User</button>
        {
            image.map((imgs, i) =>(
                <div>
                    <div style={{display:"flex",border:"1px solid black",height:"70px"}}>
                        <img src={imgs.avatar_url} alt="" style={{borderRadius:"50px"}}/>
                        <p>{imgs.login}</p>
                        <p>{imgs.type}</p>
                    </div>
                </div>
            ))
        }
    </div>
        
    </div>
  )
}

export default Fetch