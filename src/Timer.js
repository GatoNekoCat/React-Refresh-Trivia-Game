//Our timer needs know whether it is active or not. 
//When it becomes active it will  count by the second up to 30.
import React, {useEffect, useState } from 'react';
import './Timer.css';

const Timer = ()=> {
  //State
  const[seconds, setSeconds] = useState(0);
  const[isActive, setIsActive] = useState(false);

//Toggle the isActive state
  function toggle() {
    setIsActive(!isActive);
  }

//Reset the timer
  function reset() {
  setSeconds(0);
  setIsActive(false);
}

//Using the useEffect react hook to detect when isActive is true and then start the timer
  useEffect(()=>{
    let interval = null;
    if (isActive) {
      interval = setInterval(()=> {
        setSeconds(seconds => seconds+1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return() => clearInterval(interval);
  },[isActive, seconds]);

  

  return(
    <div className='timerApp'>
      <div className='time'>
        {seconds}s
      </div>
      <div className='row'>
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer;