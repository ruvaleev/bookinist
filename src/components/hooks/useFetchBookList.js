import React, { useState, useEffect } from 'react';

import useAxios from './useAxios';

function _fetchBookList() {
  return(
    useAxios.get('/books/?fields%5B%5D=title', {})
      .then(result => result.data.records)
    );
}

const useFetchBookList = () => {
  const [data, setRecord] = useState(null);

  useEffect(() => {
    {
      _fetchBookList().then(data => {
        setRecord(data);
      });
    }
  }, []);
  return data;
};

export default useFetchBookList;
