import React,{createContext,useState} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props)=>{
  const [isLoggedIn, setLoggedIn] = useState(false);
  return(
    <AuthContext.Provider value={{value:[isLoggedIn,setLoggedIn]}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
