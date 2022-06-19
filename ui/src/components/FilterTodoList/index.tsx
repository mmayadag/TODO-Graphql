import { FC, useContext } from "react";
import styled from "styled-components";
import { FilterTypes } from "@/constants/filterTypes";
import type { FilterSelection } from '@/types/filterType';
import { TodoContext } from '@/context/todoContext';

const StyledFilter = styled.span<{ isSelected: boolean }>`
    font-family: MarkPro;
    font-size: 14px;
    font-weight: 500;
    margin-right:10px;
    cursor: ${props => !props.isSelected ? 'pointer' : 'default'};
    color: ${props => props.isSelected ? '#1f2a4b' : '#4a77e5'};
    ${props => !props.isSelected && 'text-decoration: underline;'}
`;

const StyledTitle = styled.span`
    margin-right: 16px;
`

const StyledFilterTodoList = styled.div`
    font-family: MarkPro;
    font-size: 14px;
    font-weight: 500;
    color: rgba(31, 42, 75, 0.59);
    height: 14px;
    position: absolute;
    bottom: 35px;
    user-select: none;
`;

type FilterProps = {
}


const FilterTodoList: FC<FilterProps> = () => {
    const { filterSelection, onClickFilter } = useContext(TodoContext);

    return (
        <StyledFilterTodoList>
            <StyledTitle>Show:</StyledTitle>
            {FilterTypes.map(({ title, type }, index) =>
                <StyledFilter isSelected={filterSelection === type} key={index} onClick={() => { onClickFilter(type) }}>{title}</StyledFilter>
            )}
        </StyledFilterTodoList>
    )
};

export default FilterTodoList;
