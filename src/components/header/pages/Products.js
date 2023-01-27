import React, { useState } from 'react';
import { Button, Container, Card, Row, Form } from 'react-bootstrap';
import { product } from '../../../consture/product'
import { UtilsData } from '../../utils/UtilsData';

function Products() {
  const [allproduct, setAllproduct] = useState(product);
  const [searchPro, setSerachPro] = useState({
    search: ''
  });

  const categorys = UtilsData(product, "category");
  console.log(categorys, "categorys");

  const filterList = (category) => {

    const filterData = product.filter((data) => {
      if (category === "allData") {
        return product
      }
      return data.category === category
    })
    setAllproduct(filterData)

  }

  const handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value

    setSerachPro({[name]:value})
    
    const filterTitle = product.filter((data) => {
 
      return data.title.toLowerCase().search(value) != -1
        
    })

    setAllproduct(filterTitle)
    
  } 
  
  const sortData =(key,type)=>{
    console.log(key ,"key");

    const sortedData =[...allproduct].sort((proA,proB)=>{
      // console.log(proA,"proA");
      // console.log(proB,"proB");
      if(type == "low"){

        return proA[key] -proB[key];
      }else if(type == "high"){
        return proB[key] -proA[key];
      }else if(type == "acs"){
        return proA[key].localeCompare(proB[key])
      }else{
        return proB[key].localeCompare(proA[key])

      }
    })
    setAllproduct(sortedData)
  }

  return (
    <>
      <Container>
        <Row>
        <div className='col-8' style={{textAlign:'center'}}>
        <Button onClick={(() => filterList("allData"))}>All</Button>
        <Button onClick={()=> sortData("price","low")}>low prce</Button>
        <Button onClick={()=> sortData("price","high")}>high prce</Button>
        <Button onClick={()=> sortData("title","acs")}>A-Z</Button>
        <Button onClick={()=> sortData("title","dcs")}>Z-A</Button>
        {
          categorys.map((category, i) => {
            return (
              <>
                <Button onClick={(() => filterList(category))} key={i} id={i}>{category}</Button>

              </>

            )
          })
        }
        </div>
        <div className='col-2' style={{textAlign:'start'}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" value={searchPro.search} onChange={((e)=>handleChange(e))} placeholder="search"/>
          </Form.Group>
        </div>
        </Row>
      </Container>
      <Container>
        <Row style={{ justifyContent: 'center' }}>
          {
            allproduct.map((product, i) => {
              return (
                <Card style={{ width: '18rem' }} key={i} id={i}>
                  <Card.Img variant="top" style={{ width: '250px', height: '200px' }} src={product.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {
                        `${product.price}Rs`
                      }
                    </Card.Text>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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

export default Products