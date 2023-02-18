import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function About() {
  const [svalue,setsvalue]=useSearchParams()

  const age = svalue.get('age')
  console.log(`age is :${age}`)

  const [abc,setabc]= useState('')

  return (
    
    <div>Welcome to About Page
      {age}
      <hr></hr>
      <input placeholder='change into URL' onChange={(e)=>{setsvalue({age:e.target.value})}}></input>
      <button onClick={()=>{setsvalue({age_update:100})}}>Click me to update URL</button>
      {abc}
      <input name="name" placeholder='name' value={abc} onChange={(e)=>setabc(e.target.value)}></input>
    </div>

  )
}

export default About