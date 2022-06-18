import { FC } from "react";
import { Title, MainContainer, TextInput, Button, TodoListItem } from "@/components";

const TodoList: FC = () => {
    const TodoData: TodoItem[] = [{
        id: 1,
        isChecked: false,
        content: "Make a todo List"
    },
    {
        id: 2,
        isChecked: true,
        content: "Check off first item"
    },
    {
        id: 3,
        isChecked: false,
        content: "Realize you already did 2 things today "
    },
    {
        id: 4,
        isChecked: false,
        content: "Reward yourself with a nice, long nap"
    }];

    return (
        <MainContainer minHeight="437px">
            <Title>Todo List</Title>
            <TextInput placeholder="Add a new todo" />
            {TodoData.map(todoItem => <TodoListItem item={todoItem} />)}
        </MainContainer>
    )
};

export default TodoList;