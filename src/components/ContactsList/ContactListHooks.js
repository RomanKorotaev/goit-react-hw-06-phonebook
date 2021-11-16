import React, { useState } from "react";
import s from "./ContactsList.module.css";
import PropTypes from 'prop-types';
import ContactHooks from '../Contact/ContactHooks'
import state from '../../redux/store'
import {deleteContactMY} from '../../redux/contact/actions'
import { connect } from "react-redux";



function ContactsListHooks ({ contactsArray, onDeleteContact, contactsArray2,onDelCont }) {

  console.log ( 'Лог стейта из ContactsList  - state.getState () ', state.getState () )
    const [contacts, setContacts] = useState([]);

    const deleteContact = (contactId) => {

        setContacts  ( prevState => ({
            contacts: prevState.contacts.filter ( contact=> contact.id !== contactId)
          }) )
      }

       onDelCont ( )

    return (
        <ul className= {s.ContactsListStyle}>
          {/* <span className= {s.contactsListTitle}>Contacts</span> */}
          {contactsArray.map(({id, name, number}) => (
              <li  className= {s.item}  key = {id}>
  
                {/* ВНИМАНИЕ!  Важный синтаксис во время прокидывания пропов по цепочке: onDelete = {()=>onDeleteContact(id)} */}
                    {/* <Contact name={name} number ={number} onDelete = {()=>onDeleteContact(id)} /> */}
                    
                    {/* <ContactHooks name={name} number ={number} onDelete = {()=>onDeleteContact(id)} /> */}

                    <ContactHooks name={name} number ={number} onDelete = {()=>onDelCont(id)} />

              </li>
            ))}
        </ul>
  
      );
}

ContactsListHooks.propTypes = {
 
    state: PropTypes.arrayOf(
      // Объект с определённой структурой
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ), 
  };

  const mapStateToProps = state => { 
  return {contactsArray2: state}
}

const mapDispatchToProps = dispatch => {
  return {
    //Здесь название локальной функции придумывавем сами
    onDelCont: (id)  => dispatch (deleteContactMY(id)),
  }
} 

  export default connect(mapStateToProps, mapDispatchToProps) (ContactsListHooks);
