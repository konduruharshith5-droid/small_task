import { useEffect, useState } from 'react';
import Nav from './components/Nav'
import UserList from './components/UserList'
import { useSearchMembersQuery } from './features/Api/Members';

function Home() {

  const [searchText, setSearchText] = useState("");
  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);
  const [sortAsc, setSortAsc] = useState(false);
  const [sortDesc, setSortDesc] = useState(false);
  const [sortByFieldName, setSortByFieldName] = useState('firstName');
  const order = sortAsc ? 'asc' : sortDesc ? 'desc' : null;
  const [activatePage, setActivatePage] = useState(0)


  const { data, isLoading, isFetching,  error } = useSearchMembersQuery({searchText, limit, order, skip, sortByFieldName});

  useEffect(() => {
    setSkip(0);
  }, [searchText])

  let displayData = data

  return (
    <div className='body'>
        <div className='managebox'>
            <Nav />
            <UserList data = {displayData} sortAsc = {sortAsc} sortDesc = {sortDesc} setSortAsc = {setSortAsc} setSortDesc = {setSortDesc} searchText = {searchText} setSearchText = {setSearchText} skip = {skip} setSkip = {setSkip} limit = {limit} setLimit = {setLimit} isLoading={isLoading} isFetching = {isFetching} activatePage = {activatePage} setActivatePage = {setActivatePage} />
        </div>
    </div>
  )
}

export default Home
