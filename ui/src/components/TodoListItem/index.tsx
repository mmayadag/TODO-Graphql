import { FC, useContext } from "react";
import styled from "styled-components";
import CheckmarkIcon from './checkmarkIcon';
import RemoveIcon from './removeIcon';
import { TodoContext } from '@/context/todoContext';

const StyledTodoListItemContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 20px;
    margin-top: 14px;
    font-family: MarkProBook;
    font-size: 16px;
    color: #1f2a4b;
    position: relative;
    .remove{
        display: none;
    }
    :hover{
        .remove{
            display: block;
        }
    }
`;

type TodoListItemProps = {
    item: TodoItem;
}

const TodoListItem: FC<TodoListItemProps> = ({ item: { isCompleted, content, id } }) => {
    const { toggleTodoStatus, deleteTodo } = useContext(TodoContext);

    const onClickToggleStatus = () => {
        toggleTodoStatus(id);
    }
    const onClickDelete = () => {
        deleteTodo(id);
    }
    return (
        <StyledTodoListItemContainer>
            <CheckmarkIcon isCompleted={isCompleted} onClick={onClickToggleStatus} />
            {content}
            <RemoveIcon onClick={onClickDelete} />
        </StyledTodoListItemContainer>
    );
};


export default TodoListItem;
