"use client"
import { useState } from "react"

export default function Counter({users}){
    //All the components are rendered on server before it sent back to the client
    const  [counter,setCounter] = useState(12)

    console.log(users)
    return<div>

    <p>there are totall of {users.length} users</p>
    <button onClick={()=>setCounter((c)=>c+1)}>
        {counter}
    </button>
    </div> 
}