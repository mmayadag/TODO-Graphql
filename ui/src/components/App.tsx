import { FC } from 'react'
import './App.css'
import TodoList from '@/screens/TodoList';
import Login from '@/screens/Login';
import SignUp from '@/screens/SignUp';
import PrivateRoute from '@/components/PrivateRoute/index';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todolist" element={<PrivateRoute><TodoList /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
