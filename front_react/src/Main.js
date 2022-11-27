import React, {useState,useEffect } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoTemplate from "./TodoTemplate";
import axios from "axios";

const Main =()=>{
    const baseUrl= "http://localhost:3000/app"

    const [todos, setTodos]=useState([]);
  
    useEffect(()=>{
      getTodos();
    },[])
  
    const getTodos=async ()=>{
      await axios
      .get(baseUrl + "/todos/g")
      .then((response)=>{
        setTodos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      }
      )
    }
  
    const insertTodo=(value)=>{
  
      const insertTodo = async()=>{
        await axios
              .post(baseUrl+ "/todos/p", {
                name : value
              })
              .then((response)=> {
                console.log(response.data);
                getTodos();
              })
              .catch((error)=>{
                console.error(error);
              })
      }
      insertTodo();
      console.log("회원이 추가되었습니다!");
    }
  
    const updateTodo=(id)=>{
      const updateTodo= async()=>{
        await axios
              .patch(baseUrl+ "/todos/" + id, {})
              .then((response)=> {
                console.log(response.data);
                getTodos();
              })
              .catch((error)=>{
                console.error(error);
              })
      }
      updateTodo();
      console.log(id)
    }
  
    const deleteTodo= async(id)=>{
      const deleteTodo= async()=>{
        await axios
              .delete(baseUrl+ "/todos/" + id, {})
              .then((response)=> {
                console.log(response.data);
                getTodos();
              })
              .catch((error)=>{
                console.error(error);
              })
      }
      deleteTodo();
    }
  
    return (
        <TodoTemplate>
          <TodoInsert onInsert={insertTodo}/>
          <TodoList todos={todos} onRemove={deleteTodo} onToggle={updateTodo} />
        </TodoTemplate>);
}

export default Main;