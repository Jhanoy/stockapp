import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/router"
import LoginStyle from '../styles/Login.module.css'
import usersStyle from '../styles/Users.module.css'
import {Navbar, Brand, Container, Link, Button, Card, Badge, ListGroup} from 'react-bootstrap'

export default function Users() {

  const router = useRouter();

  const createButton = {

  }

  const users = [
    {name: 'dawit', type: 'stock keeper', status: 'active'},
    {name: 'amanuel', type: 'stock keeper', status: 'active'},
    {name: 'aman', type: 'stock keeper', status: 'active'},
    {name: 'ahmed', type: 'stock keeper', status: 'active'},
    {name: 'abebe', type: 'stock keeper', status: 'active'},
  ]

  return (
    <div className={LoginStyle.container}>
      <Navbar className={LoginStyle.navStyle} fixed="top" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Stores</Navbar.Brand>
        </Container>
      </Navbar>
      <div className={usersStyle.cardContainer}>
        {/* <div id={usersStyle.createCont} className="createCont d-grid gap-1">  
        <Button className={usersStyle.createBtn} variant="success" size="lg" >
            Create User
        </Button>{' '}
        </div> */}
       {
        users.map((user) => {

          return <ListGroup key={user} defaultActiveKey="">
            <ListGroup.Item 
            action 
            href="#link1" 
            key={user} 
            onClick={() => {
              router.push({
                pathname: '/AddUser/',
                query: { userData: user },
              })
            }}>
            <p className={usersStyle.order}>{user.name}</p>
            <p className={usersStyle.order}>{user.type}</p>
            <p className={usersStyle.order}>{user.name}</p>
            <Badge bg="primary">{user.status}</Badge>
            </ListGroup.Item>
          </ListGroup>          
        })
       }
      </div>
    </div>
  )
}
