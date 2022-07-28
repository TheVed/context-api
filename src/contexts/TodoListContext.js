import React,{createContext, useReducer} from 'react';

export const TodoListContext = createContext();

const todosReducer = (state,action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return[
        ...state,
        {text: action.text, id: Math.random()}
      ];

    case 'REMOVE_TODO':
      return state.filter((todo)=> todo.id !== Number(action.id));

    default:
      return state;
  }
};

const TodoListContextProvider = (props) => {
  const [todos,dispatch] = useReducer(todosReducer, [
    {text: 'Go for a walk',id: 1},
    {text: 'Plan A Vacation',id: 2},
    {text: 'Buy A Trimmer',id: 3}
  ]);
  //
  // const addTodo = (text)=>{
  //     setTodos(
  //       [...todos,
  //       {text: text,id: Math.random()}]);
  // };
  //
  // const removeTodo = (id)=>{
  //   setTodos(
  //     todos.filter((todo)=>{
  //       return todo.id !== Number(id);
  //     })
  //   )
  // }

  return(
    <TodoListContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider;
