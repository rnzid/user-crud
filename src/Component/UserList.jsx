import React from 'react'
import { UserItem } from './UserItem'

export const UserList = () => {
  return (
    <div className='Container'>
        <h1 className='my-5 text-center'>Manage user</h1>
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
    <UserItem/>
</tbody>
</table>
        </div>
    </div>
  )
}
