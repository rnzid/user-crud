import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { addUser, editUser, getUserById } from '../services/localstorage';
import { FaRegUser,FaArrowLeft,FaUserEdit,FaPhone,FaAt,FaMapMarkerAlt ,FaCalendarCheck} from 'react-icons/fa';

export const UserForm = () => {

    
const nagivate = useNavigate();
const {id} = useParams();
const [showAlert, setShowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm,setForm } = useForm({
        name: '',
        email: '',
        phone: '',
        dob: '',
        city: '',
        district: '',
        province: '',
        Country: 'Nepal'
    }
    )


    useEffect(()=> {
        if(id){
            const user = getUserById(id);
            setForm(user);
        }
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
       id? editUser(id, inputValues) : addUser(inputValues);
       setShowAlert(true);
       resetForm();
       setTimeout(() => {
        setShowAlert(false);
    }, 2000);
        // console.log(inputValues);
    }
    return (
        <div className='container'>
            <div className='d-flex my-5 justify-content-between'>
                <button className='btn btn-outline-secondary' onClick={() => { nagivate("/") }}><FaArrowLeft/> Back</button>
                <h1>{id? "Edit" : "Create"} User</h1>
                <h6>. </h6>
            </div>

            {
                showAlert && (
                    <div className='px-5'>
                        <div className='alert alert-success'>
                            <strong>Well done!</strong> {id ? "edit" : "added a new"}  User.
                        </div>
                    </div>
                )
            }
            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <FaUserEdit/>
                        <label className="form-label mt-2 mx-2" htmlFor="inputValid">Name</label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={inputValues.name}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder=' Enter full Name'
                            required
                        />
                    </div>


                    <div className="form-group">
                        <FaAt/>
                        <label className="form-label mt-2 mx-2" htmlFor="inputValid">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            placeholder='xyz@gmail.com'
                            className="form-control"
                            required
                        />
                    </div>



                    <div className='form-group row'>

                        <div className="form-group col">
                        <FaPhone/>
                            <label className="form-label mt-2 mx-2" htmlFor="inputValid">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                value={inputValues.phone}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder='+977'
                                required
                            />
                        </div>
                        <div className="form-group col">
                            <FaCalendarCheck/>
                            <label className="form-label mt-2 mx-2" htmlFor="inputValid">Dob</label>
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                value={inputValues.dob}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <FaMapMarkerAlt/>
                        <label className="form-label mt-2 mx-2" htmlFor="inputValid">Address</label>
                        <div className='form-group row'>
                            <div className='form-group col'>
                                <input
                                    id="city"
                                    type="text"
                                    name="city"
                                    value={inputValues.city}
                                onChange={handleInputChange}
                                    className="form-control"
                                    placeholder='City'
                                    required
                                />
                            </div>
                            <div className='form-group col'>
                                <input
                                    id="district"
                                    type="text"
                                    name="district"
                                    value={inputValues.district}
                                onChange={handleInputChange}
                                    className="form-control"
                                    placeholder='District'
                                    required
                                />
                            </div>
                            <div className='form-group col'>
                                <select id="province" value={inputValues.province}
                                    onChange={handleInputChange} class="form-control" name="province" >
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
                                    id="country"
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    placeholder='Country'
                                    value="Nepal"
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="d-grid gap-2 mt-3">
                        <button  type="submit" className="btn btn-outline-primary btn-block"> <FaRegUser/> {id ?  "Edit" :  "Add"}  User</button>
                    </div>
                </form>
            </div>

           <div>aaas</div>
        </div>
    )
}
