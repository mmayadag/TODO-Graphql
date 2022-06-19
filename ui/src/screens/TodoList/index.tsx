import { FC } from "react";
import { Title, MainContainer, SelectedTodo, FilterTodoList } from "@/components";
import AddTodo from './AddTodo';

const TodoList: FC = () => {

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