import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';

export const UserForm = () => {
    const nagivate = useNavigate();
   
    return (
        <div className='container'>
            <div className='d-flex my-5 justify-content-between'>
                <button className='btn btn-outline-secondary' onClick={() => { nagivate("/") }}>Back</button>
                <h1>Add User</h1>
                <h6>. </h6>
            </div>
            <div className="card border-primary p-5 m-5">
                <form >
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Name</label>

                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder=' Enter full Name'
                            id="inputValid"
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder='xyz@gmail.com'
                            className="form-control"
                            id="inputValid"
                            required
                        />
                    </div>



                    <div className='form-group row'>

                        <div className="form-group col">
                            <label className="form-label mt-2" htmlFor="inputValid">Phone</label>
                            <input
                                name="phone"
                                type="text"
                                className="form-control"
                                id="inputValid"
                                placeholder='+977'
                                required
                            />
                        </div>
                        <div className="form-group col">
                            <label className="form-label mt-2" htmlFor="inputValid">Dob</label>
                            <input
                                name="dob"
                                type="date"
                                className="form-control"
                                id="inputValid"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Address</label>
                        <div className='form-group row'>
                            <div className='form-group col'>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    placeholder='City'
                                    id="inputValid"
                                    required
                                />
                            </div>
                            <div className='form-group col'>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    placeholder='District'
                                    id="inputValid"
                                    required
                                />
                            </div>
                            <div className='form-group col'>
                                <select id="inputState" class="form-control" name="province">
                                    <option selected>Choose province...</option>
                                    <option>Bagmati Province</option>
                                    <option>Gandaki Province</option>
                                    <option>Lumbini Province</option>
                                    <option>Karnali Province</option>
                                    <option>Province No.1</option>
                                    <option>Sudurpashchim Pradesh</option>
                                    <option>Madesh Pradesh</option>
                                </select>
                            </div><div className='form-group col'>
                                <input
                                    type="text"
                                    name="Country"
                                    className="form-control"
                                    placeholder='Country'
                                    value="Nepal"
                                    id="inputValid"
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{/* {id ? "Edit" : "Add"} */} User</button>
                    </div>
                </form>
            </div>

            
        </div>
    )
}
