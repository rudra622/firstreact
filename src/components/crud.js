import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';


const GetForm = () => {
    const formdata = localStorage.getItem("MyForm")
    if (formdata) {
        return JSON.parse(formdata)
    } else {
        return [];
    }
}

function Crud() {

    const [rinitial, setRinitial] = useState({
        name: '',
        email: ''
    });
    const [storedata, setStoredata] = useState(GetForm());
    const [editin, setEditIn] = useState(false)
    const [editrinitial, setEditRinitial] = useState({
        name: '',
        email: ''
    })
    const [indexId, setIndexId] = useState('');

    const ChangeInput = (e) => {
        const data = e.target.name;
        const value = e.target.value;
        // console.log(value);
        if (editin) {
            setEditRinitial({ ...editrinitial, [data]: value })
        }
        else {
            setRinitial({ ...rinitial, [data]: value });
        }
    }

    const SubmitCrud = (e) => {
        e.preventDefault();
        setStoredata([...storedata, rinitial]);
        setRinitial({
            name: '',
            email: '',
            Mobile:''
        });
    }


    const edit = (index, value) => {
        setEditIn(true)
        setEditRinitial(value);
        setIndexId(index);
        // console.log("edit", "edit");
        // console.log(index);
    }

    const handleSave = (index) => {
        setEditIn(false)
        setEditRinitial({
            name: '',
            email: '',
            mobile:''
        });
        const array = storedata;
        array[index] = editrinitial
        setStoredata([...array])
    }

    const DeletItem = (id) => {
        let filterData = storedata.filter((value, index) =>{
            return index !== id;
        })
        setStoredata(filterData);
    }

    useEffect(() => {
        localStorage.setItem('MyForm', JSON.stringify(storedata))
    }, [storedata])

    return (
        <>
            <Container>
                <Form onSubmit={SubmitCrud}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" name='name' value={rinitial.name} onChange={(e) => { ChangeInput(e) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name='email' value={rinitial.email} onChange={(e) => { ChangeInput(e) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Enter your mobile" name='mobile' value={rinitial.Mobile} onChange={(e) => { ChangeInput(e) }} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
                <h1 style={{textAlign:"center"}}>List</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr className='col-12'>
                            <th className='col-1'>ID</th>
                            <th className='col-3'>Name</th>
                            <th className='col-3'>Email</th>
                            <th className='col-2'>Mobile</th>
                            <th className='col-2'>Edit</th>
                            <th className='col-2'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storedata.map((value, index) => {
                                return (
                                    <tr key={index} id={index}>
                                        <td className='col-2'>{index + 1}</td>
                                        <td className='col-3'>
                                            {
                                                editin && indexId === index ? <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="text"
                                                        name="name"
                                                        value={editrinitial.name}
                                                        onChange={(e) => { ChangeInput(e) }}
                                                    />
                                                </Form.Group> : value.name
                                            }
                                        </td>
                                        <td className='col-3'>
                                            {
                                                editin && indexId === index ? <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="text"
                                                        name="email"
                                                        value={editrinitial.email}
                                                        onChange={(e) => { ChangeInput(e) }} />
                                                </Form.Group> : value.email
                                            }

                                        </td>
                                        <td className='col-3'>
                                            {
                                                editin && indexId === index ? <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="text"
                                                        name="mobile"
                                                        value={editrinitial.mobile}
                                                        onChange={(e) => { ChangeInput(e) }} />
                                                </Form.Group> : value.mobile
                                            }

                                        </td>
                                        <td className='col-2'>
                                            {
                                                editin && indexId === index ? <Button variant="primary" onClick={() => { handleSave(index, value) }}>Save</Button> : <Button variant="primary" onClick={() => { edit(index, value) }}>Edit</Button>
                                            }

                                        </td>
                                        <td className='col-2'>
                                            <button type="button" onClick={() => { DeletItem(index) }} className="btn btn-warning">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Crud;