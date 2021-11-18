import React from "react";
import s from "./Filter.module.css";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {setFilter} from '../../redux/actions'
import state from '../../redux/store'


function FilterHooks ({value, handleFilter, value2, handleFilter2,  handleFilter3}) {

  const changeFilter3 = e => {
    // state.filter = e.currentTarget.value

    handleFilter3 (e.currentTarget.value)


  }


   const handleFilter3Test = e => {
     console.log ("СРАБОТАЛ ИНПУТ ФИЛЬТРА ,  е = ", e);
     console.log ("СРАБОТАЛ ИНПУТ ФИЛЬТРА ,  e.currentTarget.value = ", e.currentTarget.value)
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
                  
                //  onChange={handleFilter}
                onChange={changeFilter3} 
                // onChange={handleFilter3Test} 
                  placeholder="Введите имя для поиска контакта"
              />
            </label> 
    )
}

FilterHooks.propTypes = {
    value: PropTypes.string,
   }

   const mapStateToProps = state => { 
    return {value2: state.filterValue}
  }


   const mapDispatchToProps = dispatch => {
    return {
      //Здесь название локальной функции придумывавем сами
      handleFilter3: data => dispatch (setFilter(data))
    }
  } 
   

export default connect(mapStateToProps, mapDispatchToProps) (FilterHooks);
