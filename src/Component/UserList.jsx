import { useEffect, useState } from 'react'
import { getListUsers , deleteUser } from '../services/localstorage';
import { useNavigate } from 'react-router-dom';

import { FaRegTrashAlt } from 'react-icons/fa';


export const UserList = () => {
    const [users, setUsers] = useState([]);
const navigate = useNavigate()
    useEffect(() => {
        setUsers(getListUsers())
    }, []);
    console.log("users", users)
    const userinfo = JSON.parse(localStorage.getItem("@users"));

const removeUser=(id)=>{
 deleteUser(id);
 setUsers(getListUsers())
 
}


    return (
        <div className='Container'>
            <h1 className='my-5 text-center'>Manage user</h1>
            {
                userinfo.length > 0 ? (
                    <div className='container bg-secondary p-3'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Dob</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userinfo.map((item, i) => (
                                    <tr className="table-primasry" key ={i}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.Country}</td>
                                    <td>
                                        <div className='d-flex gap-3'>
                                            <span role="button" className='badge bg-success'  onClick={() => navigate(`/edit-user/${item.id}`)}>
                                                Edit
                                            </span>
                                            
                                            <span role="button" className='badge bg-danger' onClick={() => removeUser(item.id)} >
                                            
                                                Delete
                                                <FaRegTrashAlt/>
                                            </span>
                                        </div>
                                    </td>
                                </tr>

                                ))}
                                

                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className='text-center'> No Users</h3>
                )


            }

        </div >
    )
}
