import React, {useContext,useEffect} from "react";
import Contacts from "../../contacts/Contacts/Contacts";
import ContactForm from '../../contacts/ContactForm/ContactForm'
import ContactFilter from '../../contacts/ContactFilter/ContactFilter'
import AuthContext from '../../../context/auth/authContext'

import './Account.css'

function Account() {
const authContext = useContext(AuthContext);

useEffect(() => {
authContext.loadUser();
//eslint-disable-next-line
},[])
  return (
    <div className="account account_margin">
      <div>
        <ContactForm/>
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
}

export default Account;
