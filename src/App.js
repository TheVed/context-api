import React from 'react';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded segment'>
        <AuthContextProvider>
          <ThemeContextProvider>
            <TodoListContextProvider>
              <NavBar/>
              <ToDoList/>
            </TodoListContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
