import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리엑트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },

  ])

  return ( 
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  )
}

export default App;