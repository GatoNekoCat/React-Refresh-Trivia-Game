//Our timer needs know whether it is active or not. 
//When it becomes active it will  count by the second up to 30.
import React, {useEffect, useState } from 'react';
import './Timer.css';

const Timer = ()=> {
  //State
  const[seconds, setSeconds] = useState(0);
  const[isActive, setIsActive] = useState(false);
  const[timeOver, setTimeOver] = useState(false);

//Toggle the isActive state
  function toggle() {
    setIsActive(!isActive);
  }

//Reset the timer
  function reset() {
  setSeconds(0);
  setIsActive(false);
}

//Using the useEffect react hook to detect when isActive 
//  is true and then start the timer which will add 
//   seconds to our state.
  useEffect(()=>{
    let interval = null;
    if (isActive) {
      if (timeOver) {
        toggle();
      } else {
        interval = setInterval(()=> {
          setSeconds(seconds => seconds+1);
        }, 1000);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return() => clearInterval(interval);
  },[isActive, seconds]);

  

  return(
    <div className='timerApp'>
      <div className='timer-text'>
        {seconds}'s
      </div>
    </div>
  )
}

export default Timer;