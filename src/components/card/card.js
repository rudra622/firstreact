import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Button,Card,Row } from 'react-bootstrap'
// import './home.css'  
function CardImg() {
  const list = [{
    img: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    rating: 4.44,
    brand: "Apple"
  }, {
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    rating: 4.09,
    brand: "oppo"
  }, {
    img: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    rating: 4.09,
    brand: "Huawei"
  }]


  const Navigate = useNavigate();

  const click = (index, d) => {
    Navigate("/view", { state: { data: d } })
  }

  return (
    <>
      <Container style={{textAlign: 'center'}}>
        <h1>Card</h1>
            <Row>
            {
              list.map((d, index) => {
                return (
                  <Card className='COL-4' style={{ width: '30%' ,margin:'20px' }}>
                    <Card.Img variant="top" style={{height:'200px'}}  src={d.img} />
                    <Card.Body>
                      <Card.Title>{d.brand}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button onClick={() => { click(index, d) }}>view</Button>
                    </Card.Body>
                  </Card>
                )
              })
            }
            </Row>
      </Container>
    </>
  )
}

export default CardImg;