import Head from 'next/head'
import Image from 'next/image'
import LoginStyle from '../styles/Login.module.css'
import {Navbar, Brand, Container, Link, Nav, Form, Button, image} from 'react-bootstrap'
// import Container from 'rect-bootstrap/Container'

export default function AddCompany() {
  const dashStyle = {
    backgroundColor: '#0d6efd'
  }
  return (
    <div className={LoginStyle.container}>
      <Navbar style={dashStyle} fixed="top" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <div className={LoginStyle.headerInfo}>
        <h1 className={LoginStyle.formTitle}>Login</h1>
        {/* <h2 className={LoginStyle.formTitle}>Login</h2> */}
      {/* </div> */}
      <Form className={LoginStyle.formmargin}>
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
