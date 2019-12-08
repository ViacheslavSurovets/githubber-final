import React, {useContext,useEffect} from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../../components/contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'

function About() {
const authContext = useContext(AuthContext);

useEffect(() => {
authContext.loadUser();
//eslint-disable-next-line
},[])
  return (
    <div className="grid-2 m-1">
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

export default About;
