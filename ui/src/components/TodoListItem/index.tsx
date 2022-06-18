import { FC, ReactNode } from "react";
import styled from "styled-components";
import CheckmarkIcon from './checkmarkIcon';
import RemoveIcon from './removeIcon';

const StyledTodoListItemContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 20px;
    margin-top: 14px;
    font-family: MarkPro;
    font-size: 16px;
    color: #1f2a4b;
    position: relative;
`;

type TodoListItemProps = {
    item: TodoItem;
}

const TodoListItem: FC<TodoListItemProps> = ({ item: { isChecked, content } }) => <StyledTodoListItemContainer>
    <CheckmarkIcon isChecked={isChecked} />
    {content}
    <RemoveIcon />
</StyledTodoListItemContainer>;


export default TodoListItem;
