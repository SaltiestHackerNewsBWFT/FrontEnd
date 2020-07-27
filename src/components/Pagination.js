import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pagination(props) {
  const [page, setPage] = useState(props);
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();

  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    axios.get(page)
      .then(response => {
        setPageData(response.data.results);
        setPrevPage(response.data.info.prev);
        setNextPage(response.data.info.next);
        console.log('axios response.data: ', response.data)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [page])

  return (
    <div>
      {(prevPage != null)
        ? <button type='button' onClick={() => setPage(prevPage)}>Prev</button>
        : <button type='button' className='disabled'>Prev</button>
      }
      {(nextPage != null)
        ? <button type='button' className='uk-button uk-button-primary' onClick={() => setPage(nextPage)}>Next</button>
        : <button type='button' className='disabled'>Next</button>
      }
    </div>
  )
}