import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
export default function AuthLoginView() {
  const [error, setError] = useState(0);

  useEffect(()=>{
    axios.get('/auth/login')
    .then(res=>console.log(res))

  },[]);

 
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Link to ="./main">
      <Button
        variant="primary"
        type="submit"
      >
       Login
      </Button>
      </Link>
      <Link to="./register">
        <Button type="submit" >Register</Button>
      </Link>
    </Form>
  );
}
