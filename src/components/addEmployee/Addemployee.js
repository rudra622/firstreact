import React, { useState,useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import GetData from '../componate/utils/GetData'
import GetData from '../utils/GetData'

function Addemployee() {

  const navigate = useNavigate()
    const [initial, setInitial] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        gender: ''
    })

    const [isSubmit, setIsSubmit] = useState(false);
    const [storeData, setStoreData] = useState(GetData)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInitial({ ...initial, [name] : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, email, mobile, gender, address} = initial

        if (name === '' || email ==='' || mobile === '' || gender === '' || address === '') {
            console.error("Enter Value.....!");
        } else {
            setStoreData([...storeData, initial])
            setIsSubmit(true);
            setInitial({
                name: '',
                email: '',
                mobile: '',
                address: '',
                gender: ''
            })    
            // navigate("/EmpView", {state : {data : [...storeData, initial]}})
        }
    }
    useEffect(() =>{
        console.log("storeData useEfect");
        localStorage.setItem("crud", JSON.stringify(storeData));
        if(isSubmit){
            navigate("/empview");
        }
    },[storeData])
    // console.log(storeData);

    return (
        <>
            <Container>
                <h1>Add Employee Details</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name :</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name='name' value={initial.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMobile">
                        <Form.Label>Mobile No :</Form.Label>
                        <Form.Control type="text" placeholder="Enter mobile number" name='mobile' value={initial.mobile} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address :</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" name='address' value={initial.address} onChange={handleChange} />
                    </Form.Group>

                    <Form.Label>Gender : </Form.Label>
                    <Form.Group>
                        <Form.Check
                            inline
                            label="Male"
                            name="gender"
                            type='radio'
                            value="male"
                            checked = {initial.gender === 'male'}
                            onChange={handleChange}
                            />
                        <Form.Check
                            inline
                            label="Female"
                            name="gender"
                            type='radio'
                            value="female"
                            checked = {initial.gender === 'female'}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <br />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>

    )

}

export default Addemployee;