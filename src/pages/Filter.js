import '../App.css';
import React from 'react';
import JSONDATA from '../MOCK_DATA.json';
import { useState } from 'react';

function Filter() {
  /* searchTerm gets whats entered in search bar */
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='filter'>
      <h1>React Name Filter</h1>
      {/* creates search bar and passes what is written into searchTerm const */}
      <input type="text" placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}} />
      {/* filters through the data inside the json file */}
      {JSONDATA.filter((val) => {
        // if search bar is empty return all data on file
        if (searchTerm == "") {
          return val
          // if data entered in the search bar matches the data on file it returns the value(first name). Removes the case sensitivity 
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
          // searches for last name in the data
        } else if (val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => { 
        return (
          // searches for fisrt and last names in the data and displays it
          <div className='user'>
            <p>{val.first_name} {val.last_name}</p>
          </div>
        );
      })}
    </div> 
  );
}

export default Filter;
