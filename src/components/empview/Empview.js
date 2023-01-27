import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Table, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GetData from '../utils/GetData'

function Empview() {
    const [storeData, setStoreData] = useState(GetData)
    const [EditInput, setEditInput] = useState(false)
    const [editinitial, setEditInitial] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        gender: ''
    });
    const [isSave, setSave] = useState(false);
    const [indexId, setIndexId] = useState('');
    const [searchPro, setSerachPro] = useState({
        search: ''
    });

    // const handleChange =(e)=>{
    //     const name = e.target.name
    //     const value = e.target.value
    
        
        
    //   }

    const ChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(value);
        if (EditInput) {
            setEditInitial({ ...editinitial, [name]: value })
        }
        setSerachPro({[name]:value})
        
        const filterTitle = storeData.filter((data) => {
     
          return data.name.toLowerCase().search(value) != -1
            
        })
    
        setStoreData(filterTitle)
    }

    // console.log(">>>>", storeData);
    // const location = useLocation()
    const navigate = useNavigate()
    // const storeData = location.state.data

    const Add = () => {
        navigate("/AddEmployee")
    }

    const handleEdit = (i, d) => {
        setEditInput(true);
        setEditInitial(d);
        setIndexId(i);
        setSave(false);
    }

    const handleSave = (index) => {
        setEditInput(false)
        setSave(true);
        setEditInitial({
            name: '',
            email: '',
            mobile: '',
            address: '',
            gender: ''
        });
        const array = storeData;
        array[index] = editinitial
        setStoreData([...array])
    }

    const handleDelete = (id) => {
        if (isSave) {
            setSave(false);
        } else {
            setSave(true);
        }
        const filterData = storeData.filter((d, i) => {
            return i !== id;
        })
        setStoreData(filterData)
    }

    // useEffect(() => {
    //     if (location.state) {
    //         localStorage.setItem("crud", JSON.stringify(location.state.data))
    //         setStoreData(location.state.data)
    //     } else {          
    //         setStoreData(GetData)
    //     }
    // }, [])

    useEffect(() => {
        console.log("USeEffect Save");
        localStorage.setItem("crud", JSON.stringify(storeData));
    }, [isSave])

    return (
        <Container>
            <h1>EmployeeView </h1>
            <Button variant='primary' onClick={() => { Add() }}>AddEmployee</Button>
            <div className='col-2' style={{ textAlign: 'start' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" value={searchPro.search} onChange={((e) => ChangeInput(e))} placeholder="search" />
                </Form.Group>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeData.map((d, i) => {
                            return (
                                <tr key={i} id={i}>
                                    <td>{i + 1}</td>
                                    <td>{
                                        EditInput && indexId === i ? <Form.Group className="mb-3">
                                            <Form.Control type="name" placeholder="Enter Name"
                                                name='name'
                                                value={editinitial.name}
                                                onChange={(e) => { ChangeInput(e) }} />
                                        </Form.Group> : d.name
                                    }</td>
                                    <td>{
                                        EditInput && indexId === i ? <Form.Group className="mb-3">
                                            <Form.Control type="email" placeholder="Enter Email"
                                                name='email'
                                                value={editinitial.email}
                                                onChange={(e) => { ChangeInput(e) }} />
                                        </Form.Group> : d.email
                                    }</td>
                                    <td>{
                                        EditInput && indexId === i ? <Form.Group className="mb-3">
                                            <Form.Control type="mobile" placeholder="Enter Mobile Number"
                                                name='mobile'
                                                value={editinitial.mobile}
                                                onChange={(e) => { ChangeInput(e) }} />
                                        </Form.Group> : d.mobile
                                    }</td>
                                    <td>{
                                        EditInput && indexId === i ? <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Enter Address"
                                                name='address'
                                                value={editinitial.address}
                                                onChange={(e) => { ChangeInput(e) }} />
                                        </Form.Group> : d.address
                                    }</td>
                                    <td>{
                                        EditInput && indexId === i ? <Form.Group>
                                            <Form.Check
                                                inline
                                                label="Male"
                                                name="gender"
                                                type='radio'
                                                value="male"
                                                checked={editinitial.gender === 'male'}
                                                onChange={(e) => { ChangeInput(e) }}
                                            />
                                            <Form.Check
                                                inline
                                                label="Female"
                                                name="gender"
                                                type='radio'
                                                value="female"
                                                checked={editinitial.gender === 'female'}
                                                onChange={(e) => { ChangeInput(e) }}
                                            />
                                        </Form.Group> : d.gender}</td>
                                    <td>
                                        {
                                            EditInput && indexId === i ? <Button variant="primary" onClick={() => { handleSave(i, d) }}>Save</Button> : <Button variant="primary" type="button" onClick={() => { handleEdit(i, d) }}>Edit</Button>
                                        }
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => { handleDelete(i) }}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default Empview;