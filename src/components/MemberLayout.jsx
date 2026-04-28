import React from 'react'

function MemberLayout({sortAsc, setSortAsc, sortDesc, setSortDesc, setSkip, activatePage, setActivatePage}) {
  return (
    <div className='userlist__memberlayout'>
      <table>
        {/* <colgroup>
            <col style={{width: "22%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "28%"}} />
            <col style={{width: "15%"}} />
            <col style={{width: "20%"}} />
          </colgroup> */}
        <tbody>
          <tr>
              <th className='layout-gap'>
                <div>User</div>
                <div className='layout-gap__symb'>
                  <button className='layout-gap__symb__svg1' 
                  onClick={() => {
                        setSortAsc(true);
                        setSortDesc(false);
                        setSkip(0);
                        setActivatePage(0);
                      }}>
                        {sortAsc ? <svg width="9" height="6" viewBox="0 0 9 6" fill="none" fillRule='evenodd' clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 0C4.23801 0 4.03767 0.144 3.7911 0.372L0.313356 3.63C0.118151 3.816 0 4.086 0 4.368C0 4.956 0.421233 5.37 0.85274 5.37C1.06849 5.37 1.28425 5.268 1.47945 5.082L4.5 2.286L7.51541 5.082C7.71575 5.268 7.92637 5.37 8.14726 5.37C8.57877 5.37 9 4.956 9 4.368C9 4.086 8.88185 3.816 8.68151 3.63L5.2089 0.372C4.96233 0.138 4.76199 0 4.5 0Z" fill="#08090A"/>
                        </svg> : <svg width="9" height="6" viewBox="0 0 9 6" fill="none" fillRule='evenodd' clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 0C4.23801 0 4.03767 0.144 3.7911 0.372L0.313356 3.63C0.118151 3.816 0 4.086 0 4.368C0 4.956 0.421233 5.37 0.85274 5.37C1.06849 5.37 1.28425 5.268 1.47945 5.082L4.5 2.286L7.51541 5.082C7.71575 5.268 7.92637 5.37 8.14726 5.37C8.57877 5.37 9 4.956 9 4.368C9 4.086 8.88185 3.816 8.68151 3.63L5.2089 0.372C4.96233 0.138 4.76199 0 4.5 0Z" fill="#ADBBCC"/>
                          </svg>
                          }
                  </button>
                  <button className='layout-gap__symb__svg2' onClick={() => {setSortDesc(true); setSortAsc(false); setSkip(0); setActivatePage(0)}}>{!sortDesc ? <svg width="9" height="6" viewBox="0 0 9 6" fill="none" fillRule='evenodd' clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 5.36999C4.76199 5.36999 4.96233 5.22599 5.2089 4.99799L8.68664 1.73999C8.88185 1.55399 9 1.284 9 1.002C9 0.413995 8.57877 -5.28203e-06 8.14726 -5.31976e-06C7.93151 -5.33862e-06 7.71575 0.101995 7.52055 0.287995L4.5 3.08399L1.48459 0.287994C1.28425 0.101994 1.07363 -5.93815e-06 0.85274 -5.95746e-06C0.421233 -5.99519e-06 4.33267e-07 0.413994 3.81863e-07 1.00199C3.57209e-07 1.28399 0.118151 1.55399 0.318493 1.73999L3.7911 4.99799C4.03767 5.23199 4.23801 5.36999 4.5 5.36999Z" fill="#ADBBCC"/>
</svg> : <svg width="9" height="6" viewBox="0 0 9 6" fill="none" fillRule='evenodd' clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 5.36999C4.76199 5.36999 4.96233 5.22599 5.2089 4.99799L8.68664 1.73999C8.88185 1.55399 9 1.284 9 1.002C9 0.413995 8.57877 -5.28203e-06 8.14726 -5.31976e-06C7.93151 -5.33862e-06 7.71575 0.101995 7.52055 0.287995L4.5 3.08399L1.48459 0.287994C1.28425 0.101994 1.07363 -5.93815e-06 0.85274 -5.95746e-06C0.421233 -5.99519e-06 4.33267e-07 0.413994 3.81863e-07 1.00199C3.57209e-07 1.28399 0.118151 1.55399 0.318493 1.73999L3.7911 4.99799C4.03767 5.23199 4.23801 5.36999 4.5 5.36999Z" fill="#08090A"/>
</svg>
 }
              </button> 
              </div>
              </th>
              <th>Company</th>
              <th>Address</th>
              <th>Role</th>
              <th>Phone</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MemberLayout
