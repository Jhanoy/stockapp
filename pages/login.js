import Head from 'next/head'
import Image from 'next/image'
import LoginStyle from '../styles/Login.module.css'
import {Navbar, Brand, Container, Link, Nav, Form, Button} from 'react-bootstrap'
// import Container from 'rect-bootstrap/Container'

export default function Login() {
  return (
    <div className={LoginStyle.container}>
      <Form className={LoginStyle.formmargin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Wel&apos;l never share your email with anyone else.
          </Form.Text>
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
