import React, { FunctionComponent, ReactNode,useState } from 'react';

type CardProps = {
    title: string,
    paragraph: string,
    children? : ReactNode,
  }

type StyledH1Props = {
    color: string | 'black',
    style?: React.CSSProperties,
    children? : ReactNode
}


export const StyledH1:FunctionComponent<StyledH1Props> = (data) => {
  const [getValue, setValue] = useState<boolean>(false);

  const handleOnClick = (value:boolean):void => {
      setValue(value);
      if(getValue){
          alert('Clicked on text '+ getValue);
      }
  }

  return(
        <h1 style={{color: data.color, ...data.style}}
          onClick={()=>handleOnClick(true)}>
        {data.children}
      </h1>  
  )  
 
}
    
      
export const Card: FunctionComponent<CardProps> = (data) => <aside>
  <h2>{ data.title }</h2>
  <p>
    { data.paragraph }
  </p>
  {data.children}
</aside>

