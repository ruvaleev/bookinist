import React from 'react';

import BookCard from '../BookCard/index';

import axios from 'axios';

const API_TOKEN = 'keytD9pwBZ4Dqx4l0'

const httpClient = axios.create({
  baseURL: 'https://api.airtable.com/v0/appKMrgQ3BnCNerfL',
  timeout: 4000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

function useFetchBook(EnhancedComponent, bookId) {
  return class useFetchBook extends React.Component {
    constructor(props) {
      super(props);
      this._mapFromAirtable = this._mapFromAirtable.bind(this);
      this._mapAuthors = this._mapAuthors.bind(this);
      this._mapRecommendations = this._mapRecommendations.bind(this);
      this._fetchData = this._fetchData.bind(this);
      this.state = {
        record: null
      }
    }

    componentDidMount() {
      this._fetchData();
    }

    render() {
      const { record } = this.state;
      return <EnhancedComponent book={record} isLoading={!record} {...this.props}/>;
    }

    _fetchData() {
      httpClient.get(`/books/${bookId}`, {})
        .then(result => result.data)
        .then(this._mapFromAirtable)
        .then(record => {
          this.setState({
            record
          })
        });
    }
  
    _mapFromAirtable(data) {
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
        'authors': this._mapAuthors(data.fields),
        'recommendations': this._mapRecommendations(data.fields)
      }
    }
  
    _mapAuthors(fields) {
      return fields.authors.map(id => ({
        'id': id,
        'name': fields['name (from authors)'][fields.authors.indexOf(id)],
        'email': fields['email (from authors)'][fields.authors.indexOf(id)],
        'avatar': fields['avatar (from authors)'][fields.authors.indexOf(id)].url,
        'shortInformation': fields['shortInformation (from authors)'][fields.authors.indexOf(id)]
      }))
    }
  
    _mapRecommendations(fields) {
      return fields.recommendations.map(id => ({
        'id': id,
        'cover': fields['cover (from recommendations)'][fields.recommendations.indexOf(id)].url,
        'title': fields['title (from recommendations)'][fields.recommendations.indexOf(id)],
        'authors': [
          { 'name': fields['recommendations_author_names'][fields.recommendations.indexOf(id)] }
        ]
      }))}
  };
}

export default useFetchBook;

const styles = {
  container: {
    marginTop: '4em'
  }
}
