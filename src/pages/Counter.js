import '../App.css';
import React, { useState } from 'react';

function Counter() {
    // creates a variable and updates the variable with buttons
    // useState(0) will render the counter as 0 on page load
    const [count, setCount] = useState(0);
    return (
        <div className='Counter'>
            <h1>React Number Counter</h1>
            {/* if counter is positive apply positive class if negative apply negative class if 0 apply nothing */}
            <h2 style={{fontSize: '8rem'}} className={count > 0 ? 'btn-positive' : count < 0 ? 'btn-negative' : null}>{count}</h2>
            <div className='button-wrapper'>
                {/* on click the button will increase or decrease the counter */}
                <button className='btn' onClick={()=> setCount(count-10)}>-10</button>
                <button className='btn' onClick={()=> setCount(count-1)}>-</button>
                <button className='btn' onClick={()=> setCount(0)}>Reset</button>
                <button className='btn' onClick={()=> setCount(count+1)}>+</button>
                <button className='btn' onClick={()=> setCount(count+10)}>+10</button>
            </div>
        </div>
  );
}

export default Counter; 