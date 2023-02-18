import React from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'

function Childuser() {
    const param = useParams()
    console.log(param.name)
    
  return (
    <div>
        Welcome to {param.name} user page


    </div>
  )
}

export default Childuser