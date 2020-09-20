import React, { useState, useEffect } from 'react';

import useAxios from './useAxios';

function _fetchBook(bookId) {
  console.log('Fetcj book')
  return(
    useAxios.get(`/books/${bookId}`, {})
      .then(result => result.data)
      .then(_mapBookFromAirtable)
    );
}

function _mapBookFromAirtable(data) {
  return {
    'id': data.id,
    'title': data.fields.title,
    'shortDescription': data.fields.shortDescription,
    'pageCount': data.fields.pageCount,
    'language': data.fields.language,
    'progress': data.fields.progress,
    'cover': data.fields.cover[0].url,
    'minimumPrice': data.fields.minimumPrice,
    'desiredPrice': data.fields.desiredPrice,
    'collectedAmount': data.fields.collectedAmount,
    'expectedAmount': data.fields.expectedAmount,
    'raiting': data.fields.raiting,
    'authors': _mapAuthors(data.fields),
    'recommendations': _mapRecommendations(data.fields)
  }
}

function _mapAuthors(fields) {
  return fields.authors.map(id => ({
    'id': id,
    'name': fields['name (from authors)'][fields.authors.indexOf(id)],
    'email': fields['email (from authors)'][fields.authors.indexOf(id)],
    'avatar': fields['avatar (from authors)'][fields.authors.indexOf(id)].url,
    'shortInformation': fields['shortInformation (from authors)'][fields.authors.indexOf(id)]
  }))
}

function _mapRecommendations(fields) {
  return fields.recommendations.map(id => ({
    'id': id,
    'cover': fields['cover (from recommendations)'][fields.recommendations.indexOf(id)].url,
    'title': fields['title (from recommendations)'][fields.recommendations.indexOf(id)],
    'authors': [
      { 'name': fields['recommendations_author_names'][fields.recommendations.indexOf(id)] }
    ]
  }))
}

const useFetchBook = (bookId) => {
  const [data, setRecord] = useState(null);

  useEffect(() => {
    _fetchBook(bookId).then(data => {
      setRecord(data);
    });
  }, [bookId]);
  return data;
};

export default useFetchBook;
