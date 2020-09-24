import React, { useState, useEffect } from 'react';

import airTableClient from 'components/shared/httpClient';

function _fetchBookList() {
  return(
    airTableClient.get('/books/?fields%5B%5D=title', {})
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
