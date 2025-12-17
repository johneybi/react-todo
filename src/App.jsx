import Title from "antd/es/typography/Title";
import { useState, useEffect } from "react";

import InputTodo from "./components/InputTodo";
import TodoItem from "./components/TodoItem";
import TodoStats from "./components/TodoStats";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

function App() {
  const [todos, setTodos] = useState(() => {
    const getTodos = localStorage.getItem('stTodos');
    return getTodos ? JSON.parse(getTodos) : []
  });
  const [inputTodo, setInputTodo] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [updateText, setUpdateText] = useState("");

  useEffect(() => {
        localStorage.setItem('stTodos', JSON.stringify(todos))
    console.log('setStorage 실행')
  }, [todos])


  const createTodo = () => {
    if (!inputTodo.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputTodo,
      isDone: false,
      datetime: dayjs().format("MM.DD.YYYY / hh:mm a"),
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    setInputTodo("");
  };

  const deleteTodo = (selectedId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== selectedId);
    setTodos(updatedTodos);
  };

  //수정모드 시작

  const startUpdate = (selectedTodo) => {
    setUpdateId(selectedTodo.id);
    setUpdateText(selectedTodo.text);
  };

  //수정모드 취소

  const cancelUpdate = () => {
    setUpdateId(null);
    setUpdateText("");
  };

  // 수정한 것 저장하기 (update)
  const updateTodo = () => {
    const updateTodos = todos.map((todo) =>
      todo.id === updateId
        ? {
            ...todo,
            text: updateText,
            datetime: dayjs().format("MM.DD.YYYY / hh:mm a"),
          }
        : todo
    );
    setTodos(updateTodos);
    setUpdateId(null);
  };

  const handleToggle = (isDoneId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === isDoneId ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(updatedTodos);
  };

  const inputProps = { inputTodo, setInputTodo, createTodo }
  const itemProps = { updateId, updateText, setUpdateText, handleToggle, deleteTodo, startUpdate, updateTodo, cancelUpdate }

  return (
    <>
      <div className="relative overflow-hidden w-full max-w-[800px] bg-md-secondaryContainer/30 rounded-mdHero p-16 my-[100px] mx-auto">
        <div className="relative z-10">
          <Title level={1} className="!mb-4 !text-md-on !text-6xl">
            React To-do
          </Title>

          <InputTodo {...inputProps}/>

          <TodoStats todos={todos}/>


          <ul className="divide-y divide-md-outline/20">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} {...itemProps}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
