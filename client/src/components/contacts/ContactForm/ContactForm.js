import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import {  Form, Input, Button, Radio } from 'antd';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
        <div className="form-group">
      <Input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
        </div>
        <div className="form-group">
      <Input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
        </div>
        <div className="form-group">
      <Input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
        </div>
      <h5>Contact Type</h5>
      <Radio
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <Radio
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
        <div className="form-group">
        <Button
          htmlType='submit'
          type="primary"
          block
        >{current ? 'Update Contact' : 'Add Contact'}</Button>
      </div>
      {current && (
        <div>
          <Button block onClick={clearAll}>
            Clear
          </Button>
        </div>
      )}
    </Form>
  );
};

export default ContactForm;