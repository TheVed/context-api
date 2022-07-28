import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

const NavBar = ()=>{
  return(
    <AuthContext.Consumer>{(authContext)=>{
      let isLoggedIn = authContext.value[0];
      const setLoggedIn = authContext.value[1];
      return(
        <ThemeContext.Consumer>{(themeContext)=>{
          const isDarkTheme = themeContext.value[0];
          const darkTheme = themeContext.value2;
          const lightTheme = themeContext.value3;
          const theme = isDarkTheme?darkTheme:lightTheme;
          return(
            <nav style={{background: theme.background, color: theme.text}}>
              <h1>OAK ACADEMY</h1>
              <p className='ui button' onClick={()=>{setLoggedIn(isLoggedIn=!isLoggedIn)}}>{isLoggedIn?'logged in':'not logged in'}</p>
              <div className='ui three butttons'>
                <button className='ui button'>Overview</button>
                <button className='ui button'>Contact</button>
                <button className='ui button'>Support</button>
              </div>
            </nav>
          )
        }}

        </ThemeContext.Consumer>
      )
    }}
    </AuthContext.Consumer>

  )
}

export default NavBar;
