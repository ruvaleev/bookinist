import React, { useState, useEffect } from 'react';

import axios from 'axios';

const API_TOKEN = 'keytD9pwBZ4Dqx4l0'

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appKMrgQ3BnCNerfL',
  timeout: 4000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

function _fetchBook(bookId) {
  console.log('Fetcj book')
  return(
    httpClient.get(`/books/${bookId}`, {})
      .then(result => result.data)
      .then(_mapBookFromAirtable)
    );
}

function _fetchBookList() {
  return(
    httpClient.get('/books/?fields%5B%5D=title', {})
      .then(result => result.data.records)
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
    if (bookId) {
      _fetchBook(bookId).then(data => {
        setRecord(data);
      });
    } else {
      _fetchBookList().then(data => {
        setRecord(data);
      }, [bookId]);
    }
  }, [bookId]);
  return data;
};

export default useFetchBook;
