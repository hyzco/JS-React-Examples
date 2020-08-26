import React,{useRef} from 'react';

export function TextInputWithFocusButton() {
    // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
      // strict null checks need us to check if inputEl and current exist.
      // but once current exists, it is of type HTMLInputElement, thus it
      // has the method focus! ✅
      if(inputEl && inputEl.current) {
        inputEl.current.focus();
      } 
    };
    const onButtonClickAutoComplete = () => {
        if(inputEl && inputEl.current) {
          inputEl.current.placeholder = "Put placeholder";
        } 
      };
      const clearInput = () => {
        if(inputEl && inputEl.current) {
          inputEl.current.value = "";
        } 
      };
    return (
      <>
        { /* in addition, inputEl only can be used with input elements.  */ }
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        <button onClick={onButtonClickAutoComplete}>Put placeholder in input</button>
        <button onClick={clearInput}>Clear</button>

      </>
    );
  }
