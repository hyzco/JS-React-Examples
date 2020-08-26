// import useState next to FunctionComponent
import React, { FunctionComponent, useState } from 'react';

type Counter = {
    initial? : number,
    clickAmount? : number,
}

// our components props accept a number for the initial value
export const Counter:FunctionComponent<Counter> = ({initial = 0, clickAmount = 1}) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number


  const [clicks, setClicks] = useState(initial);
  const [getClickAmount, setClickAmount] = useState(clickAmount);
  
  return <>
    <p>Clicks: {clicks}</p>
    <button onClick={() => setClickAmount(getClickAmount+1)}>Increase Per Click :{getClickAmount}</button>
    <p>Click to increase amount per click.</p>
    <button onClick={() => setClicks(clicks+getClickAmount)}>+</button>
    <button onClick={() => setClicks(clicks-getClickAmount)}>-</button>
  </>
}