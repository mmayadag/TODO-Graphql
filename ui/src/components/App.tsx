import { FC } from 'react'
import './App.css'
// @ts-ignore
import TodoList from '@/screens/TodoList';
import Login from '@/screens/Login';
import SignUp from '@/screens/SignUp';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
