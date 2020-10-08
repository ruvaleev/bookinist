import React from 'react';

export function bookPath(bookId) {
  return (
    `/book/${bookId || ':id'}`
  )
}

export function rootPath() {
  return '/'
}

export function newBookPath() {
  return '/book/new'
}
