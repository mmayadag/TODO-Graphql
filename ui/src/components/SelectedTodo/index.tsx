import { FC, useContext } from "react";
import { TodoListItem } from "@/components";
import { TodoContext } from '@/context/todoContext';


const SelectedTodo: FC = () => {

    const { renderItems } = useContext(TodoContext);

    return (
        <>
            {renderItems.map(todoItem =>
                <TodoListItem key={todoItem.id} item={todoItem} />
            )}
        </>
    )
}

export default SelectedTodo;