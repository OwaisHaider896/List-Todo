import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: search, completed: false, id: Math.random() * 1000 }
    ]);
    setSearch("");
  };
  return (
    <div className="App">
      <div className="flex  justify-center items-center">
        <div className="w-64 p-4  bg-yellow-600 text-center rounded mt-4 ">
          <h1 className="font-bold text-lg text-white">
            Justimiano Alves's Project
          </h1>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="p-1 w-full mt-2 rounded"
            type="text"
            placeholder="Todo List"
          />
          <div className=" mt-4 ">
            <button
              onClick={submitHandler}
              className="w-12 mx-2 text-center  bg-yellow-500 hover:bg-yellow-400 border p-1 rounded"
            >
              Add
            </button>

            <button className=" w-20 bg-yellow-500 border p-1 hover:bg-yellow-400 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-red-500  text-left p-4 mt-4 w-64 rounded">
          <h1 className=" mb-2 uppercase text-center text-lg font-bold text-white">
            Completed
          </h1>
          <ul>
            {todo.map((items) => (
              <li
                className="uppercase text-white semi-bold pt-2"
                key={Math.random() * 1000}
              >
                {items.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
