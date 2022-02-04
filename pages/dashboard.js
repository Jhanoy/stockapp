import {useRouter} from 'next/router'
import {Nav, Button, Navbar, Brand, Container, ListGroup, Row} from 'react-bootstrap'
import DashboardStyle from '../styles/Dashboard.module.css'
import LoginStyle from '../styles/Login.module.css'
export default function Dashboard(){
    const router = useRouter();

    const dashStyle = {
        backgroundColor: '#0d6efd'
      }
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }
    return(
        <div className={LoginStyle.container}>
            <Navbar style={dashStyle} className={LoginStyle.navStyle} fixed="top" expand={false}>
                <Container fluid>
                <Navbar.Brand href="#">Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
            <ListGroup defaultActiveKey="">
                <ListGroup.Item action href="#link1" onClick={() => router.push('/Users')}>
                Users
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" onClick={() => router.push('/Products')}>
                Products
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" onClick={() => router.push('/Sales')}>
                Sales
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" onClick={() => router.push('/Stores')}>
                Stores
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" onClick={() => router.push('/Reports')}>
                Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link6" onClick={() => router.push('/Profile')}>
                Profile
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}