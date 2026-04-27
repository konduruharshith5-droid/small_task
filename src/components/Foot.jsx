import React, { useState } from 'react'
import { useSearchMembersQuery } from '../features/Api/Members';

function Foot({data, skip, setSkip, limit, setLimit, activatePage, setActivatePage}) {

  // const [skip, setSkip] = useState(0);
  // const [limit, setLimit] = useState(10);

  // const { data, isLoading, error } = useSearchMembersQuery({searchText: '', limit, skip});

  const increasePage = () => {
    let newSkip = skip + limit
    setSkip(prev => Math.min(prev + limit, data?.total - limit));
    setActivatePage(Math.floor(newSkip / limit))
  }

  let total = Math.ceil(data?.total / limit);

  const decreasePage = () => {
    setSkip(prev => {
      const newSkip = Math.max(prev - limit, 0);
      setActivatePage(Math.ceil(newSkip / limit));
      return newSkip;
    });
  };

  const getPages = (total, current) => {
    const pages = [];

    const add = (p) => {
      if (pages[pages.length - 1] !== p) {
        pages.push(p);
      }
    };

    if (total === 0){
      return []
    }

    add(0);

    if (current > 2) add("...");

    let start = Math.max(1, current - 1);

    if (current === total - 1) {
      start = Math.max(1, current - 4)
    }

    if (current === total - 2) {
      start = Math.max(1, current - 3)
    }

    if (current === total - 3) {
      start = Math.max(1, current - 2)
    }

    let end = Math.min(total - 2, current + 1);
    if (current === 0 ) {
      end = Math.min(total-2, current + 4)
    }

    if (current === 1) {
      end = Math.min(total-2, current + 3)
    }

    if (current === 2 ) {
      end = Math.min(total-2, current + 2)
    }

    for (let i = start; i <= end; i++) {
      add(i);
    }

    if (current < total - 3) add("...");

    add(total - 1);

    return pages;
  };

  return (
    <div className='userlist__foot'>
      <h3 className='userlist__foot__show'>Show</h3>
      <div className='userlist__foot__setlimit'>
      <input type='text' value={limit} onChange={(e) => {setLimit(Math.min(Number(e.target.value), 10))}} className='userlist__foot__setlimit__limit' />
      <button className='userlist__foot__setlimit__btn' onClick={() => {setLimit(Math.max(1,limit - 1))}}  ><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.2793 6.17578C5.53125 6.17578 5.74805 6.07617 5.94141 5.88281L10.3301 1.38281C10.4824 1.23047 10.5645 1.04297 10.5645 0.820312C10.5645 0.363281 10.2012 0 9.75 0C9.52734 0 9.31641 0.0878906 9.15234 0.251953L5.28516 4.23633L1.41211 0.251953C1.24805 0.09375 1.04297 0 0.814453 0C0.363281 0 0 0.363281 0 0.820312C0 1.04297 0.0820312 1.23047 0.234375 1.38867L4.62305 5.88281C4.82812 6.08203 5.0332 6.17578 5.2793 6.17578Z" fill="#677A90"/>
      </svg>
      </button>
      </div>
      {/* <input type='number' id="userlist__foot__limit" min={1} max={10} value={limit} onChange={(e) => setLimit(Number(e.target.value))}  /> */}
      {total === 0 ? <div></div> : <div className='userlist__foot__change'>
        <button onClick={decreasePage} className={activatePage === 0 ? 'userlist__foot__change__dark' : 'userlist__foot__change__box'} disabled = {activatePage === 0}  >
          <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.39941C-9.17768e-09 4.60938 0.0830078 4.79004 0.244141 4.95117L3.99414 8.6084C4.12109 8.73535 4.27734 8.80371 4.46289 8.80371C4.84375 8.80371 5.14648 8.50098 5.14648 8.125C5.14648 7.93945 5.07324 7.76367 4.93652 7.62695L1.61621 4.4043L4.93652 1.17676C5.06836 1.04004 5.14648 0.869141 5.14648 0.678711C5.14648 0.302734 4.84375 1.66479e-08 4.46289 0C4.27734 -8.11051e-09 4.12109 0.0683593 3.98926 0.195312L0.244141 3.85254C0.078125 4.02344 8.96425e-09 4.19434 0 4.39941Z" fill="#A4AFBC"/>
          </svg>
        </button>
        {getPages(total, activatePage).map((item, index) => (
          item === "..." ? <span className='userlist__foot__change__dots' key={`dots-${index}`}>...</span> :
          <div className = {`userlist__foot__change__numbox ${activatePage === item ? 'userlist__foot__change__numbox--activate': ''}`} key = {`page - ${item}`}  onClick={() => {setSkip(item * limit); setActivatePage(item)}}>{isNaN(item + 1) ? "..." : item + 1}</div>
        ))}
        <button onClick={increasePage} className={activatePage === total - 1 ? 'userlist__foot__change__dark' : 'userlist__foot__change__box'} disabled={activatePage === total - 1} >
          <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.14648 4.4043C5.14648 4.19434 5.06348 4.01367 4.90234 3.85254L1.15234 0.195313C1.02539 0.0683594 0.869141 2.43316e-08 0.683594 0C0.302735 -4.99436e-08 7.00279e-07 0.302734 6.50975e-07 0.678711C6.26644e-07 0.864258 0.0732428 1.04004 0.209962 1.17676L3.53027 4.39941L0.209961 7.62695C0.078125 7.76367 2.49718e-08 7.93457 0 8.125C-4.93034e-08 8.50098 0.302734 8.80371 0.683594 8.80371C0.869141 8.80371 1.02539 8.73535 1.15723 8.6084L4.90234 4.95117C5.06836 4.78027 5.14648 4.60938 5.14648 4.4043Z" fill="#677A90"/>
          </svg>
        </button>
      </div>}
    </div>
  )
}

export default Foot
