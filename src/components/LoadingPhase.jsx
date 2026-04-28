import React from 'react'

function LoadingPhase() {
  return (
    <div>
      <table>
        <tbody className='userlist__memberlist__body'>
          {/* <colgroup>
            <col style={{width: "22%"}} />
            <col style={{width: "10%"}} />
            <col style={{width: "38%"}} />
            <col style={{width: "10%"}} />
            <col style={{width: "20%"}} />
          </colgroup> */}
          <tr className='userlist__memberlist__body__member'>
            <th><div className='userlist__memberlist__loadname'></div></th>
            <th><div className='userlist__memberlist__loadcompany'></div></th>
            <th><div className='userlist__memberlist__loadaddress'></div></th>
            <th><div className='userlist__memberlist__loadrole'></div></th>
            <th><div className='userlist__memberlist__loadphone'></div></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LoadingPhase
