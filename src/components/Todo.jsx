import React, { useState, useEffect, useReducer } from "react";
import styles from "./todo.module.css";


   let list= JSON.parse(localStorage.getItem("list")) || [];
 
 

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_todo": {
      return {
        todos: [...state.todos, { text: action.text, id: Date.now() }],
      };
    }
    case "TOGGLE_todo" : {
      return {
        todos : state.todos.map((todo,id) => id = action.id ? {...todo, isCompleted: !todo.isCompleted} : todo)
      }
    }
    case "DELETE_todo": {
      return {
        todos: state.todos.filter((todo, id) => id !== action.id),
      };
    }
    default:
      return state;
  }
};


const Todo = () => {
  const [{todos}, dispatch] = useReducer(reducer, {todos:list});
  const [text, setTodo] = useState("");
  const [isCompleted, setIsCompleted] = useState(todos.isCompleted);
  // const [todos, setTodos] = useState(getListItems());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className={styles.firstDiv}>
        <button
          className={styles.btn1}
          onClick={(e) => {
            dispatch({ type: "ADD_todo", text });
            setTodo("");
          }}
        >
          +
        </button>

        <input
          placeholder="Add a To-Do here"
          className={styles.inputBox}
          value={text}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </div>

      <div className={styles.todoList}>
        {todos.map((todo, id) => (
          <>
            <div className={styles.todo} key={id}>
              <div>
                <input
                  className={styles.input}
                  type="checkbox"
                  // checked={isCompleted}
                  onChange={(e) => {
                    setIsCompleted(e.target.checked);
                  }}
                />
                <div>{todo.text}</div>
              </div>

              <div>
                <button
                  className={styles.btn2}
                  onClick={() => dispatch({ type: "DELETE_todo", id })}
                >
                  Remove Todo
                </button>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" />
              </div>
            </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default Todo;
