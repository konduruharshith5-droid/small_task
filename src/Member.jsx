import React, { useEffect, useState } from 'react'
import { useGetMembersQuery, useSearchMembersQuery, useSortMembersAscQuery, usePaginateMembersQuery } from './features/Api/Members.js'

function Member() {

  let [searchText, setSearchText] = useState('');
  let [sortAsc, setSortAsc] = useState(false);
  let [skip, setSkip] = useState(0);
  let [limit, setLimit] = useState(10);
  let [sortDesc, setSortDesc] = useState(false);
  let order = sortAsc ? 'asc' : sortDesc ? 'desc' : null;
  let [sortByFieldName, setSortByFieldName] = useState('firstName');

//   const { data, isLoading, error } = useGetMembersQuery(undefined, {
//     skip: searchText.length > 0 || sortAsc,
// });

//   const { data: searchData, isLoading: searchIsLoading, error: searchError } = useSearchMembersQuery({searchText, limit: limit1}, {
//     skip: searchText.length === 0
// });

//   const { data: sortedData, isLoading: sortIsLoading, error: sortError } = useSortMembersAscQuery({ order: order, page: skip, limit: limit1}, {
//     skip: !sortAsc && !sortDesc
//   })

//   const {data: paginateData, isLoading: paginateIsLoading, error: paginateError } = usePaginateMembersQuery({ page: skip, limit: limit1 }, {
//     skip: searchText.length > 0 || sortAsc || sortDesc
//   })

  // const displayData = paginateData ? paginateData : searchData ? searchData : sortedData ? sortedData : data;

  const {data, isLoading, error } = useSearchMembersQuery({searchText, limit, order, skip, sortByFieldName});

  let displayData = data;

  // if (searchText.length > 0) {
  //   displayData = searchData;
  // }else if (sortedData) {
  //   displayData = sortedData;
  // }else {
  //   displayData = paginateData;
  // }

  const increasePage = () => {
    setSkip(prev => prev + limit);
  }

  const decreasePage = () => {
    setSkip(prev => Math.max(prev - limit, 0));
  }

  useEffect(() => {
    setSkip(0);
  }, [searchText])

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  return (
    <div>
      <input type='text' value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
      <button onClick={() => {setSortAsc(true); setSortDesc(false); setSkip(0)}}>Sort data</button>
      <button onClick={() => {setSortDesc(true); setSortAsc(false); setSkip(0)}}>Sort data</button>
      <input type='number' min={1} max={15} value={limit} onChange={(e) => setLimit(Number(e.target.value))} />
      <button onClick={increasePage} >Next Page</button>
      <button onClick={decreasePage} >Previous Page</button>
      {displayData?.users?.length > 0 ? (
        displayData.users.map((member) => (
          <div key={member.id}>
            <h1>{member.firstName} {member.lastName}</h1>
          </div>
        ))
      ) : (<div>No Member Found</div>)}
    </div>
  )
}

export default Member