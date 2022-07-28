import React,{useState, useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoListContext} from '../contexts/TodoListContext';

const ToDoList = ()=>{
  const [todo,setTodo] = useState('');
  const {todos,dispatch} = useContext(TodoListContext);
  return(
    <ThemeContext.Consumer >{(themeContext)=>{
      let isDarkTheme = themeContext.value[0];
      const changeTheme = themeContext.value[1];
      const darkTheme = themeContext.value2;
      const lightTheme = themeContext.value3;
      const theme = isDarkTheme?darkTheme:lightTheme;
      return(
        <TodoListContext.Consumer>{(todoContext)=>{
          const handleChange = (event)=>{
            setTodo(event.target.value);
          }

          const handleSubmit = (event)=>{
            event.preventDefault();
            dispatch({type: 'ADD_TODO',text: todo})
          }

          const handleClick = (event)=>{
            dispatch({type: 'REMOVE_TODO',id: event.target.id});
          }

          return(
            <div style={{background: theme.background, color: theme.text}}>
              {todos.length?(todos.map((todo)=>{return(<p id={todo.id} onClick={handleClick} key={todo.id} className='item'>{todo.text}</p>)})):(<div>YOU HAVE NO TODOS</div>)}
              <form onSubmit={handleSubmit}>
                <label htmlFor='todo'>Add Todo</label>
                <input type='text' id='todo' onChange={handleChange}/>
                <input type='submit' value='Add' />
              </form>
              <button className='ui button primary' onClick={()=>{changeTheme(isDarkTheme=!isDarkTheme)}}>Change</button>
            </div>
          )
        }}
        </TodoListContext.Consumer>
    )
    }}
    </ThemeContext.Consumer>
  )
}

export default ToDoList;
