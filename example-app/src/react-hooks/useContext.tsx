import React, { useContext } from 'react';
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
const ThemeContext = React.createContext(themes.dark);


export const Display = () => {
  return <>
     <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  </>
}


function Toolbar(props:any) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    theme.background = "purple";
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context! Click to change
      </button>
    );
  }