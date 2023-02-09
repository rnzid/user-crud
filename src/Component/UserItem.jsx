import React from 'react'

export const UserItem = () => {
  return (
    <tr>
        <td>name</td>
        <td>Name@gmail.com</td>
        <td>9860123694</td>
        <td>12/1/2022</td>
        <td>Tokha,ktm provience 3</td>
        <td>
            <div className='d-flex gap-3'>
<span role="button" className='badge bg-success'>
Edit
</span>
<span role="button" className='badge bg-danger'>
Delete
</span>
            </div>
        </td>
    </tr>
  )
}
