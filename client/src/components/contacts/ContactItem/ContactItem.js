import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../../context/contact/contactContext';
import {  Button, Card} from 'antd';
import './ContactItem.css'

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };



  return (
    <Card hoverable >
      <h3 className='card__title card__title_left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'card__badge ' +
            (type === 'professional' ? 'card__badge_success' : 'card__badge_primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="card__description card__description_margin">
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <Button
          style={{background:"#13c2c2",color: "white"}}
          onClick={() => setCurrent(contact)}
        >
          Edit
        </Button>
        <Button   style={{background:"#cf1322",color: "white"}} onClick={onDelete}>
          Delete
        </Button>
      </p>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;