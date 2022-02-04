import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'
import LoginStyle from '../styles/Login.module.css'
import SalesStyle from '../styles/Sales.module.css'
import {Navbar, Brand, Container, Link, Nav, Form, Button, Alert, Row, Col} from 'react-bootstrap'
// import Container from 'rect-bootstrap/Container'

AddProduct.getInitialProps = async (ctx) => {
    const rawResponse = await fetch('https://shillingfintech.com/stock2/products/selections', 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const content = await rawResponse.json();
    const statusCode = await rawResponse.status;
    return {selectionData: content}
} 

export default function AddProduct({selectionData}) {
  
    const router = useRouter();

    const [productName, setProductName] = useState('');    
    const [sku, setSku] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [description, setDescription] = useState('');
    const [attributes, setAttributes] = useState('');
    const [brands, setBrands] = useState('');
    const [category, setCategory] = useState('');
    const [store, setStore] = useState('');
    const [availability, setAvailability] = useState('');

    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState();
    const [isInValid, setIsInvalid] = useState(false);
    const [alertMssg, setAlertMssg] = useState('');  

    // inputSelections();

  function validateForm() {
    return productName.length > 0 && sku.length > 0 && price.length > 0 && qty.length > 0;
  }
    async function product(action=''){

            const rawResponse = await fetch('https://shillingfintech.com/stock2/products/create', 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                },
                body: JSON.stringify({
                        product_name: productName, 
                        sku: sku, 
                        price: price, 
                        qty: qty, 
                        description: description,
                        attributes_value_id : attributes,
                        brands: brands,
                        category: category,
                        store: store, 
                        availability: availability,
                      })
            });
            const content = await rawResponse.json();
            const statusCode = await rawResponse.status;
            inputValidation(content);	
            console.log(statusCode);
            console.log(content);	
    }

  function inputValidation(content){
    console.log('in function');
    if(content.exist){
      console.log('in exit');			
      if(!content.validation){
        setShow(true);	
        setAlertMssg('Invalid input');
        setVariant('danger');
        console.log('in validation');				
        // content.inputs.map((finput) => {
        //   if(finput == 'email'){
        //     setIsInvalid(true);
        //   }else if(finput == 'password'){
        //     setIsInvalid(true);
        //   }
        //   setAlertMssg('Invalid input');
        //   setVariant('danger');
        //   setShow(true);

        //   console.log(finput)
        // })
      }else if(content.incorrectInput){
        setShow(true);	
        setAlertMssg('Wrong Email or Password!');
        setVariant('danger');
        console.log('in incorrectIput');
      }
    }else{
      setShow(true);
      setAlertMssg('Product Added Successfully');
      setVariant('success');
      console.log('success full input');
    }
  }
  const handleSubmit = event => {
    event.preventDefault();
    product();
  }
  
  const myStyle = {
    padding: 10
  }
  return (
    <div className={LoginStyle.container}>
      <Navbar className={LoginStyle.navStyle} fixed="top" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Add Product</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <Alert variant='danger'show={false}>
        This is a  alert—check it out!
      </Alert> */}
      <Form style={myStyle} onSubmit={handleSubmit}>
      <Alert show={show} variant={variant}>{alertMssg}</Alert>
        <Form.Group   controlId="formBasicProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control 
            name="product_name" 
            type="text" 
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)} />
        </Form.Group>
        <Form.Group   controlId="formBasicSku">
          <Form.Label>SKU</Form.Label>
          <Form.Control 
            name="sku" 
            type="text" 
            placeholder="Enter SKU"
            value={sku}
            onChange={(e) => setSku(e.target.value)} />
        </Form.Group>
        <Form.Group   controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            name="price" 
            type="number" 
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </Form.Group> 
        <Form.Group   controlId="formBasicQty">
          <Form.Label>QTY</Form.Label>
          <Form.Control 
            name="qty" 
            type="number" 
            placeholder="Enter QTY"
            value={qty}
            onChange={(e) => setQty(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" placeholder="Enter Description" />
        </Form.Group>
{
  selectionData.attribute.map((value) => {
    return <Form.Group key={value.attribute_data.id}>
            <Form.Label>{value.attribute_data.name}</Form.Label>
            <Form.Select 
                name="attributes_value_id"
                value={attributes}
                key={value.attribute_data.name}
                onChange={(e) => setAttributes(e.target.value)} 
            >
                {
                    value.attribute_value.map((select) => {
                        return <option key={select.id} value={select.id}>{select.value}</option>
                    })
                    
                }
            </Form.Select>
          </Form.Group>
  })
}
        <Form.Group>
            <Form.Label>Brands</Form.Label>
            <Form.Select 
                name="brands"
                value={brands}
                onChange={(e) => setBrands(e.target.value)} 
            >
                {
                    selectionData.brands.map((value) => {
                        return <option key={value.id} value={value.id}>{value.name}</option>
                    })
                    
                }              
            </Form.Select>
        </Form.Group>                            
        <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select 
                name="category" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                {
                    selectionData.category.map((value) => {
                        return <option key={value.id} value={value.id}>{value.name}</option>
                    })    
                }
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Label>Store</Form.Label>
            <Form.Select 
                name="store" 
                value={store}
                onChange={(e) => setStore(e.target.value)}
            >
                {
                    selectionData.stores.map((value) => {
                        return <option key={value.id} value={value.id}>{value.name}</option>
                    })     
                }
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Label>Availability</Form.Label>
            <Form.Select 
                name="availability" 
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
            >
                <option value="1">Yes</option>
                <option value="2">Two</option>
            </Form.Select>
        </Form.Group>                        
        <div  className='gap-2 buttonGap'>
            <Button 
                className='submitButton'
                variant="primary" 
                size="sm"
                disabled={!validateForm()}
                type="submit"
            >
            Add Product
          </Button>
          <Button className='cancelButton' type="reset" variant="danger" size="sm">
            Cancel
          </Button>          
        </div>
      </Form>
    </div>
  )
}
