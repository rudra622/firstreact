import React, { useState } from "react";
import { useFormik } from 'formik';
import {todoSchema} from '../schema/todoSchema';
import "./todocss.css"

const invalue = {
    name: ''
}
function TodoApp() {
    const [submitData, setSubmitData] = useState([])
    const { values, handleBlur, handleChange, handleSubmit, touched, errors } = useFormik({
        initialValues: invalue,
        validationSchema: todoSchema,
        onSubmit: (values, action) => {
            const newData = values;
            setSubmitData([...submitData, newData])
            action.resetForm('');
            // newData.unshift({submitData:CurrentInput,values,isCompleted:false});
            // setCurrentInput('');
        }
    })
    const removeall = () => {
        setSubmitData([])
    }

    const DeletItem = (id) => {
        let filterData = submitData.filter((d, i) =>{
            return i !== id;
        })
        setSubmitData(filterData);
    }

    // console.log(errors);
    return (
        <>
            <div className="stars">
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
            </div>

            <section  >
            <div className="containers py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card rounded-3">
                                <div className="card-body p-4">
                                    <h4 className="text-center my-3 pb-3">To Do App</h4>
                                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={handleSubmit}>
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input type="text" name="name" id="form1" className="form-control" value={values.name} onChange={handleChange} /*onChang={event=>{
                                                    setCurrentInput(event.target.value);}}*/ onBlur={handleBlur} />
                                                {
                                                    touched.name && errors.name ?
                                                        <span>
                                                            {
                                                                errors.name
                                                            }
                                                        </span> : ''
                                                }
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Add</button>
                                        </div>
                                        <div className="col-12">
                                            {
                                            submitData.length > 1 ?
                                            <button type="button" onClick={removeall} className="btn btn-warning">Clear All</button> : ''}
                                        </div>
                                    </form>
                                    <div>

                                    {
                                        submitData.map((data, i) => {
                                            console.log(data, i);

                                            return (
                                                <div className="row" key={i}>
                                                    <span className="col-4">
                                                           {i + 1}
                                                         </span><br />
                                                         <span className="col-4" style={{ textAlign: "start" }}>
                                                             {data.name}
                                                         </span>
                                                         <span className="col-4 text-align-center" style={{ textAlign: "end" }}   key={i} id={i}>
                                                             <button type="button" onClick={() => {DeletItem(i)}} className="btn btn-warning">clear</button>
                                                         </span><br /><br /><hr />
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
export default TodoApp;