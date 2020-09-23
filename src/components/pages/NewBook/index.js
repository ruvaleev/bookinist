import React, { useState, useEffect, Children } from 'react';

import { useForm } from 'react-hook-form';
import cx from 'classnames';

import Layout from 'components/shared/Layout';
import useFetchAuthors from 'components/hooks/useFetchAuthors';
import useFetchBookList from 'components/hooks/useFetchBookList';
import { createBook, uploadFile } from 'components/hooks/useHttpClient';
import { useHistory } from 'react-router-dom';
import { bookPath } from 'helpers/routes';

const NewBook = () => {
  const { errors, register, handleSubmit, isSubmitting } = useForm();

  const history = useHistory();

  const onSubmit = async ({ cover, ...data }) => {
    const formData = new FormData();
    formData.append('fileUpload', cover[0]);
    const uploadResult = await uploadFile(formData);

    const res = await createBook({
      ...data,
      cover: [
        { url: uploadResult.url }
      ],
      pageCount: parseInt(data.pageCount),
      progress: parseInt(data.progress),
      minimumPrice: parseInt(data.minimumPrice),
      desiredPrice: parseInt(data.desiredPrice),
      collectedAmount: parseInt(data.collectedAmount),
      expectedAmount: parseInt(data.expectedAmount)
    })

    const newBook = res.records[0];
    const redirectURI = bookPath(newBook.id);

    history.push(redirectURI);
  };
  const authors = useFetchAuthors();
  const recommendations = useFetchBookList();

  return (
    <Layout>
      <h1>New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name='title' errors={errors} label='Title' register={register({ required: 'Required' })}/>
        <Field name='pageCount' type='number' errors={errors} label='Кол-во страниц' register={register({ required: 'Required' })}/>
        <Field name='shortDescription' errors={errors} label='Краткое описание' register={register({ required: 'Required' })}/>
        <Field name='language' errors={errors} label='Язык' register={register({ required: 'Required' })}/>
        <Field name='progress' type='number' errors={errors} label='Прогресс' register={register({ required: 'Required' })}/>
        <Field name='minimumPrice' type='number' errors={errors} label='Минимальная цена подписки ($)' register={register({ required: 'Required' })}/>
        <Field name='desiredPrice' type='number' errors={errors} label='Желаемая цена подписки ($)' register={register({ required: 'Required' })}/>
        <Field name='collectedAmount' type='number' errors={errors} label='Уже собрано ($)' register={register({ required: 'Required' })}/>
        <Field name='expectedAmount' type='number' errors={errors} label='Ожидается собрать ($)' register={register({ required: 'Required' })}/>
        <Select name='authors' label='Автор(ы)' multiple='multiple' errors={errors} register={register({ required: 'Required' })}>
          {authors && authors.map((author) => (
            <option key={author.id} value={author.id}>{author.name}</option>
          ))}
        </Select>
        <Select name='recommendations' label='Рекоммендации' multiple='multiple' errors={errors} register={register({ required: 'Required' })}>
          {recommendations && recommendations.map((recommendation) => (
            <option key={recommendation.id} value={recommendation.id}>{recommendation.fields.title}</option>
          ))}
        </Select>
        <Field name='cover' type='file' label='Обложка' errors={errors} register={register({ required: 'Required' })}/>
        <button disabled={isSubmitting}>Add book</button>
      </form>
    </Layout>
  );
};

export default NewBook;

const Select = ({ register, label, list, errors, children, ...inputProps }) => (
  <div>
    <label htmlFor={inputProps.name}>{label}</label>
    {
      children &&
      <select ref={register} {...inputProps}>
        {children}
      </select>
    }
    {errors && errors[inputProps.name] && <span>{errors[inputProps.name].message}</span>}
  </div>
)

const Field = ({ register, label, errors, ...inputProps }) => {
  const Component = 'input';

  return (
    <div>
      <label htmlFor={inputProps.name}>{label}</label>
      <Component ref={register} {...inputProps}/>
      {errors && errors[inputProps.name] && <span>{errors[inputProps.name].message}</span>}
    </div>
  )
}
