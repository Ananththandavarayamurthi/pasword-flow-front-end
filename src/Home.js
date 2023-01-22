import React from 'react'
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"
// import { useState } from 'react'

function Home(props) {
    const navigate=useNavigate();
        
   const json = props.data.data
    console.log(json)
  return (
    <div>{!json.name?(navigate("/login")):(
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>NAME:{json.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Email:{json.email}</Card.Subtitle>
        <Card.Text>
        Phone Number:
        {json.mobileNumber}
        </Card.Text>
      </Card.Body>
    </Card>)
}
        </div>
  )
}

export default Home