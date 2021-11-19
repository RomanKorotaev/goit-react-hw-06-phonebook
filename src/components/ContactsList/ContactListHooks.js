import React, { useState } from "react";
import s from "./ContactsList.module.css";
import PropTypes from 'prop-types';
import ContactHooks from '../Contact/ContactHooks'
import state from '../../redux/store'

import {deleteContactMY} from '../../redux/actions'
import { connect } from "react-redux";




function ContactsListHooks ({ contactsArray2, onDelCont }) {

  console.log ( 'Лог стейта из ContactsList  - state.getState () ', state.getState () );

    return (
        <ul className= {s.ContactsListStyle}>
            { contactsArray2.length<1
                ?   ( <p className={s.item}> List of contacts is empty </p> )
                :   ( contactsArray2.map(({id, name, number}) => (
                        
                      <li  className= {s.item}  key = {id}>
                            <ContactHooks name={name} number ={number} onDelete = {()=>onDelCont(id)} />
                      </li>
                )))
            }
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

    if (state.filteredContacts.length>1) {
      return {contactsArray2: state.filteredContacts} 
    } else {
      return {contactsArray2: state.contacts}
    }

}

const mapDispatchToProps = dispatch => {
  return {
    //Здесь название локальной функции придумывавем сами
    onDelCont: (id)  => dispatch (deleteContactMY(id)),
  }
} 

  export default connect(mapStateToProps, mapDispatchToProps) (ContactsListHooks);
  
  // export default connect(null, mapDispatchToProps) (ContactsListHooks);
