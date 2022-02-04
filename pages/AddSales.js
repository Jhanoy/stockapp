import Head from 'next/head'
import Image from 'next/image'
import LoginStyle from '../styles/Login.module.css'
import SalesStyle from '../styles/Sales.module.css'
import {Navbar, Brand, Container, Link, Nav, Form, Button, Alert, Row, Col} from 'react-bootstrap'
// import Container from 'rect-bootstrap/Container'

export default function AddUser() {
  

  function validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  const handleSubmit = event => {
    event.preventDefault();
  }
  
  const myStyle = {
    padding: 10
  }
  return (
    <div className={LoginStyle.container}>
      <Navbar className={LoginStyle.navStyle} fixed="top" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Sales</Navbar.Brand>
        </Container>
      </Navbar>
      <Alert variant='danger'show={false}>
        This is a  alert—check it out!
      </Alert>
      <Form style={myStyle}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Customer Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Customer Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Customer Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Customer Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter Customer Phone" />
        </Form.Group> 
        <Row className={SalesStyle.product}>
            <Col xs={12} sm={12} md={12}>
                <Form.Group>
                    <Form.Label>Product</Form.Label>
                    <Form.Select>
                        <option>Disabled select</option>
                        <option>Disabled select</option>
                        <option>Disabled select</option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col xs={4} sm={4} md={6}>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Qty</Form.Label>
                    <Form.Control type="number" placeholder="Qty" />
                </Form.Group>                                  
            </Col>
            <Col xs={4} sm={4} md={6}>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control type="text" placeholder="Rate" />
                </Form.Group>                                  
            </Col>
            <Col xs={4} sm={4} md={6}>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" placeholder="Amount" />
                </Form.Group>                                  
            </Col>
        </Row>         
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
        <div  className='gap-2'>
          <Button className='submitButton' variant="primary" size="sm">
            Submit
          </Button>
          <Button className='cancelButton' variant="danger" size="sm">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  )
}
