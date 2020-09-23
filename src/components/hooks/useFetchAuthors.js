import React, { useState, useEffect } from 'react';

import useAirTable from './useHttpClient';

function _fetchAuthorsList() {
  return(
    useAirTable.get('/authors?maxRecords=10&view=Grid%20view', {})
      .then(result => result.data.records)
      .then(_mapAuthorsFromAirtable)
    );
}

function _mapAuthorsFromAirtable(data) {
  return data.map(author => ({
    'id': author.id,
    'name': author.fields.name
  }))
}

const useFetchAuthorsList = () => {
  const [data, setRecord] = useState(null);

  useEffect(() => {
    {
      _fetchAuthorsList().then(data => {
        setRecord(data);
      });
    }
  }, []);
  return data;
};

export default useFetchAuthorsList;
