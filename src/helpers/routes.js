import React from 'react';

export function bookPath(bookId) {
  return (
    `/book/${bookId}`
  )
}

export function rootPath() {
  return '/'
}

export function newBookPath() {
  return '/book/new'
}
