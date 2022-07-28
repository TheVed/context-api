import React,{createContext,useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props)=>{
  const [isDarkTheme, setTheme] = useState(true);
  const [lightTheme, setLightTheme] = useState({text: '#222',background: '#d8ddf1'});
  const [darkTheme, setDarkTheme] = useState({text: '#fff',background: '#5c5c5c'});



  return(
    <ThemeContext.Provider value={{ value: [isDarkTheme,setTheme], value2: lightTheme, value3: darkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
