import React from 'react';

const todoList = [
  {
    id: "1",
    title: "Complete Assignment",
   },
   {
     id: "2",
     title: "Read",
   },
   {
     id: "3",
     title: "Be active",
   },
];

function App() {
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <p>
          <h1>Todo</h1>
          <ul>
            {todoList.map(function(item) {
              return (
                <li key={item.objectID}>
                  <span>{item.id}</span>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
