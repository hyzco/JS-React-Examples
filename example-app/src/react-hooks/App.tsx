import React from 'react';
import {Counter} from './useState';
import {TextComponent} from './useEffect';
import {Display} from './useContext';
import {TextInputWithFocusButton} from './useRef';

function App() {
    return (
        <div>
            <Counter/>
            <TextComponent/>
            <Display />
            {TextInputWithFocusButton()}
        </div>
    
    );
  }
  
  export default App;
  