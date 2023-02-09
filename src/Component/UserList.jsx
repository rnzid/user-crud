import React, { useEffect, useState } from 'react'
import { getListUsers } from '../services/localstorage';
import { UserItem } from './UserItem'

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getListUsers())
    }, []);


    return (
        <div className='Container'>
            <h1 className='my-5 text-center'>Manage user</h1>
            {
                users.length > 0 ? (
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
                                <UserItem />
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
