import { useState } from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import LoginStyle from '../styles/Login.module.css'
import {Navbar, Brand, Container, Link, Nav, Form, Button, Alert} from 'react-bootstrap'
// import Container from 'rect-bootstrap/Container'

export default function Login(props) {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState();
  const [isInValid, setIsInvalid] = useState(false);
  const [alertMssg, setAlertMssg] = useState('');
  
    function inputValidation(content){
      console.log('in function');
      if(content.exist){
        console.log('in exit');			
        if(!content.validation){
          console.log('in validation');				
          content.inputs.map((finput) => {
            if(finput == 'email'){
              setIsInvalid(true);
            }else if(finput == 'password'){
              setIsInvalid(true);
            }
            setAlertMssg('Invalid input');
            setVariant('danger');
            setShow(true);

            console.log(finput)
            // document.getElementById(finput).style.color = 'red';
          })
        }else if(content.incorrectInput){
          setShow(true);	
          setAlertMssg('Wrong Email or Password!');
          setVariant('danger');
          console.log('in incorrectIput');
            // document.getElementById('incorrectInput').innerHTML = 'Wrong Password or Email!';
        }
      }else{
        router.push('/dashboard');
      }
    }
  ///////////////////////////////////////////// LOGIN ////////////////////////////////////////////////////////
    async function stockLogin(){
        const rawResponse = await fetch('https://shillingfintech.com/stock2/auth/login', 
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json'
          },
          body: JSON.stringify({ email: email, password: password })
        })
        const content = await rawResponse.json();
        const statusCode = await rawResponse.status;
        inputValidation(content);	
        console.log(statusCode);
        console.log(content);
        console.log(content.validation);
    }
  function validateForm(){
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = event => {
    event.preventDefault();
    stockLogin();
  }

  const topMargin = {
    marginTop: 100,
    marginBottom: 100,
    padding: 10
  }
  return (
    <div className={LoginStyle.container}>
      <div className={LoginStyle.headerInfo}>
        <h1 className={LoginStyle.formTitle}>Login</h1>
        {/* <h2 className={LoginStyle.formTitle}>Login</h2> */}
      </div>
      <Form style={topMargin} onSubmit={handleSubmit}>
      <Alert show={show} variant={variant}>{alertMssg}</Alert>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            name="email"
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={isInValid} />
          <Form.Text className="text-muted">
            Wel&apos;l never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password" 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={isInValid} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div  className='d-grid gap-2'>
          <Button 
            variant="primary" 
            size="sm"
            disabled={!validateForm()}
            type="submit"
            >
            login
          </Button>
        </div>
      </Form>
      <footer className={LoginStyle.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={LoginStyle.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
