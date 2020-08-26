import React, { useContext } from 'react';

// our context sets a property of type string
export const LanguageContext = React.createContext({ lang: 'en' });

export const Display = () => {
  // lang will be of type string
  const { lang } = useContext(LanguageContext);
  return <>
    <p>Your selected language: {lang}</p>
  </>
}