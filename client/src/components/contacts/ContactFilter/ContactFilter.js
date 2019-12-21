import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import {  Form, Input } from 'antd';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <Input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </Form>
  );
};

export default ContactFilter;