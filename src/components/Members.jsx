import React from 'react'

function Members({user, isLoading}) {
  return (
    <div>
      <table>
        <tbody className='userlist__memberlist__body'>
          <tr className='userlist__memberlist__body__member'>
            <td className='userlist__memberlist__body__member__name'>
              <div className='userlist__memberlist__body__member__name__full'>
                <div className='userlist__memberlist__body__member__name__full__name'>
                  {user.firstName} {user.lastName}
                </div>
              </div>
              <div className='userlist__memberlist__body__member__name__email'>
                <div className='userlist__memberlist__body__member__name__email__con'>
                  {user.email}
                </div>
              </div></td>
            <td className='userlist__memberlist__body__member__company'>
              <div className='userlist__memberlist__body__member__company__name'>
                <div className='userlist__memberlist__body__member__company__name__con'>
                  {user.company.name}
                </div>
              </div>
            </td>
            <td className='userlist__memberlist__body__member__address'>
              <div className='userlist__memberlist__body__member__address__name'>
                <div className='userlist__memberlist__body__member__address__name__con'>
                  {user.address.address}
                </div>
              </div>
            </td>
            <td className='userlist__memberlist__body__member__role'>
              <div className='userlist__memberlist__body__member__role__name'>
                <div className='userlist__memberlist__body__member__role__name__con'>
                  {user.role}
                </div>
              </div>
            </td>
            <td className='userlist__memberlist__body__member__phone'>
              <div className='userlist__memberlist__body__member__phone__name'>
                <div className='userlist__memberlist__body__member__phone__name__con'>
                  {user.phone}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Members
