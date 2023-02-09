import React from 'react'
import { useNavigate } from 'react-router-dom';


export const UserItem = ({userinfo}) => {
    //const {id, name, email, phone, dob, city } = user;
    
    console.log(userinfo)
    const navigate = useNavigate();

    
    const deleteUser = () => {
       
    }

  return (

    <tr className="table-primasry">
        <td>{userinfo.name}</td>
            <td>{userinfo.email}</td>
            <td>{userinfo.dob}</td>
            <td>{userinfo.phone}</td>
        <td>{userinfo.Country}</td>
        <td>
            <div className='d-flex gap-3'>
<span role="button" className='badge bg-success' onClick={() => navigate(`/edit-user`)}>
Edit
</span>
<span role="button" className='badge bg-danger' onClick={() => deleteUser()}>
Delete
</span>
            </div>
        </td>
    </tr>
  )
}
