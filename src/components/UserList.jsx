import React from 'react'
import Foot from './Foot'
import Search from './Search'
import Members from './Members'
import MemberLayout from './MemberLayout'
import LoadingPhase from './LoadingPhase'

function UserList({data, isFetching, skip, setSkip, limit, setLimit, searchText, setSearchText, sortAsc, setSortAsc, sortDesc, setSortDesc, isLoading, activatePage, setActivatePage}) {

  // if (isLoading) {
  //   return <div>...loading</div>
  // }

  return (
    <div className='userlist'>
      <Search searchText = {searchText} setSearchText = {setSearchText} />
      <MemberLayout sortAsc = {sortAsc} setSortAsc = {setSortAsc} sortDesc = {sortDesc} setSortDesc = {setSortDesc} setSkip={setSkip} activatePage = {activatePage} setActivatePage = {setActivatePage} />
      {isLoading || isFetching ? (
        <div className='userlist__memberlist'>
          {Array.from({length: limit}).map((_, index) => (
            <LoadingPhase key={index} />
          ))}
        </div>
      ) :
      (data?.users?.length > 0 ? (
        <div className='userlist__memberlist'>
          {data?.users?.map((user, index) => (
            <Members key={index} user = {user} isLoading = {isLoading} />
          ))}
        </div>
      ) : (
        <div className='userlist__nodata'>
          <div>
            <div className='userlist__nodata__first'>No Users found </div>
            <div className='userlist__nodata__second'>we Couldn't Find Any Users. Try Another Name or Clear Your Search</div>
          </div>
        </div>
      ))}
      <Foot data = {data} skip = {skip} setSkip = {setSkip} limit = {limit} setLimit = {setLimit} activatePage = {activatePage} setActivatePage = {setActivatePage} />
    </div>
  )
}

export default UserList