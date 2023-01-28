import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function View() {
  const nav = useNavigate();
  const Location =useLocation();
  console.log(Location);

  const proData = Location.state.data;
  console.log("proData",proData);



  const back =()=>{
    nav(-1)
  }
  return (
    <> 
    <Container style={{textAlign:'center'}}>
        <h1 style={{ textAlign: "center" }}>Card</h1>
        <img style={{ width: '350px' }} src={proData.img} />
        <h2>{proData.brand}</h2>
        <h5>{`${proData.price} Rs.`}</h5>
        <h6>{proData.rating}</h6>
        <h5>{proData.description}</h5>
        <br />
        <Button onClick={() => { back() }}>back</Button>
      </Container>
    </>  
  )
}

export default View;