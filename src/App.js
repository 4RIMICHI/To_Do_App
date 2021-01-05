import React, { useState } from "react";
import index from "./index.css";
import InputTodo from "./components/InputTodo";
import Incomplete from "./components/Incomplete";
import Complete from "./components/Complete";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  const onClickcomplete = (index) => {
    const newTodos1 = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newTodos1);
    const newTodos2 = [...incompleteTodos];
    newTodos2.splice(index, 1);
    setincompleteTodos(newTodos2);
  };

  const onClickReturn = (index) => {
    const newTodos3 = [...incompleteTodos, completeTodos[index]];
    setincompleteTodos(newTodos3);
    const newTodos4 = [...completeTodos];
    newTodos4.splice(index, 1);
    setcompleteTodos(newTodos4);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodo5個までです。</p>
      )}

      <Incomplete
        todos={incompleteTodos}
        onClickcomplete={onClickcomplete}
        onClickDelete={onClickDelete}
      />
      <Complete todos1={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};

export default App;
