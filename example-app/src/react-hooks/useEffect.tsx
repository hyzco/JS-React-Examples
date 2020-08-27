// import useState next to FunctionComponent
import React, { FunctionComponent, useState, useEffect } from 'react';

type Counter = {
    text?: string,
}

// our components props accept a number for the initial value
export const TextComponent:FunctionComponent<Counter> = ({text = "Hello World !"}) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number

  const [getText, setText] = useState(text);
  

  useEffect(() => {
        setTimeout(() => {
                setText("Hello Mars ! 👽");
        },1000)
  }, [getText])

  return  <h2> 
        {getText}
  </h2>;
  
}