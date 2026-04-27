import React from 'react'

function Members({user, isLoading}) {
  return (
    <div>
      <table>
        <colgroup>
            <col style={{width: "22%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "28%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "20%"}} />
          </colgroup>
        <tbody className='userlist__memberlist__body'>
          <tr className='userlist__memberlist__body__member tablerow'>
            <th className='tablerow__name'>{user.firstName} {user.lastName} <br /> <div className='email'>{user.email}</div></th>
            <th className='tablerow__company'>{user.company.name}</th>
            <th className='tablerow__address'>{user.address.address}</th>
            <th className='tablerow__role'>{user.role}</th>
            <th className='tablerow__phone'>{user.phone}</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Members
