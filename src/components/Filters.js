import React from 'react'

/*Functional Component*/
const Filters = (props) => {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => props.onChangeType(event.target.value)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  };


export default Filters
