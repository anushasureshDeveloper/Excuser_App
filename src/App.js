
import axios from "axios"
import { useState } from "react";
function App (){
const[excuse,setExcuse]=useState("")
    const fetchData=async(reason)=>{
const {data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}`)
setExcuse(data[0].excuse)

    }
    return(
      

        <div className="flex flex-col justify-center items-center gap-10 bg-black min-h-screen text-blue-500 px-6 py-2"> 
          <button onClick={()=>{fetchData("funny")}}  className="flex   text-sky-600 text-xl bg-cyan-100 px-4 py-2 font-bold" >Funny</button>
            <button onClick={()=>{fetchData("developers")}} className="flex   text-blue-500 text-xl  bg-cyan-100 px-4 py-2 font-bold" >Developer</button>
            <button onClick={()=>{fetchData("office")}} className="flex  text-cyan-600 text-xl bg-cyan-100 px-6 py-2 font-bold" >Office</button>
            <h1 className="text-xl">{excuse} </h1>
          </div>
    )
}
export default App   