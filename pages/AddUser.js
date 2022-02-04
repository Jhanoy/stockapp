import Head from 'next/head'
import Image from 'next/image'
import LoginStyle from '../styles/Login.module.css'
import {Navbar, Brand, Container, Link, Nav, Form, Button, Alert} from 'react-bootstrap'
// import Container from 'rect-bootstrap/Container'

export default function AddUser() {  
  
  const myStyle = {
    padding: 10
  }
  return (
    <div className={LoginStyle.container}>
      <Navbar className={LoginStyle.navStyle} fixed="top" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Users</Navbar.Brand>
        </Container>
      </Navbar>
      <Alert variant='danger'>
        This is a  alert—check it out!
      </Alert>
      <Form style={myStyle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select>
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div  className='d-grid gap-2'>
          <Button variant="primary" size="sm">
            Small button
          </Button>
        </div>
      </Form>
    </div>
  )
}
