import { FC, useContext } from "react";
import { Title, MainContainer, SelectedTodo, FilterTodoList } from "@/components";
import AddTodo from './AddTodo';
import { Navigate } from "react-router-dom";
import { AuthContext } from '@/context/authContext';

const TodoList: FC = () => {
    const { user } = useContext(AuthContext);

    if (!user.token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <MainContainer minHeight="437px" width={440}>
            <Title>Todo List</Title>
            <AddTodo />
            <SelectedTodo />
            <FilterTodoList />
        </MainContainer>
    )
};

export default TodoList;