import { useState } from 'react'
import './App.css'
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer tarefa de Cálculo",
      category: "Pessoal",
      isCompleted:false,
    },

    {
      id: 2,
      text: "Fazer atividade física",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Corrigir os bugs",
      category: "Trabalho",
      isCompleted: false,
    },
      
  ]);
  const addTodo = (text, category) => {
    const newTodos =  [...todos, {
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,
    },
  ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };


  return (
    <div className='app'> 
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) =>(
         <Todo key={todo.id} todo={todo} removeTodo ={removeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
 
}

export default App
