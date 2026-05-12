import React from 'react'

function LoadingPhase() {
  return (
    <div>
      <table>
        <tbody className='userlist__memberlist__body'>
          <tr className='userlist__memberlist__body__member'>
            <td><div className='userlist__memberlist__loadname'></div></td>
            <td><div className='userlist__memberlist__loadcompany'></div></td>
            <td><div className='userlist__memberlist__loadaddress'></div></td>
            <td><div className='userlist__memberlist__loadrole'></div></td>
            <td><div className='userlist__memberlist__loadphone'></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LoadingPhase
