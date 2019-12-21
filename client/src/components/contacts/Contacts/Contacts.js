import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from '../ContactItem/ContactItem';
import ContactContext from '../../../context/contact/contactContext';
import {Spin} from 'antd';
import './Contacts.css'


const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

useEffect(()=>{
getContacts()
  //eslint-disable-next-line
},[])


  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }



  return (
    <Fragment>
      {contacts !== null && !loading ? (<TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} style={{margin: "1em"}}/>
              </CSSTransition>
            ))}
      </TransitionGroup>) : <Spin tip="loading..." size="large" style={{  display: 'block', margin: "3em" }}/>}
      
    </Fragment>
  );
};

export default Contacts;