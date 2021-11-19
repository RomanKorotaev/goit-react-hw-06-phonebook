import React from "react";
import s from "./Filter.module.css";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {setFilter} from '../../redux/actions'
import state from '../../redux/store'


function FilterHooks ({ handleFilter3}) {

  // var throttle = require('lodash.throttle');
  // var debounce = require('lodash.debounce'); 

  const changeFilter3 = e => {
    handleFilter3 (e.currentTarget.value)
  }

    return (
        <label className = {s.filterTitle}>
              Find contacts by name:
                <input
                className ={s.filterInputStyle}
                  type="text"
                  name="filter"
                  // value = {value} 
                  // value = {value2} 
                  
                
                onChange={ changeFilter3 } 
                
                  placeholder="Введите имя для поиска контакта"
              />
            </label> 
    )
}

// FilterHooks.propTypes = {
//     value: PropTypes.string,
//    }

  //  const mapStateToProps = state => { 
  //   return {value2: state.filterValue}
  // }


   const mapDispatchToProps = dispatch => {
    return {
      //Здесь название локальной функции придумывавем сами
      handleFilter3: data => dispatch (setFilter(data))
    }
  } 
   

export default connect(null, mapDispatchToProps) (FilterHooks);
