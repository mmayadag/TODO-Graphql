import React, { FC, ReactNode, useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';
// import { CookieManager } from '@trendyol/web-storage-manager';

import type { FilterSelection } from '@/types/filterType';

type IAppProps = {
    children: ReactNode;
}

type ITodoContext = {
    renderItems: TodoItem[],
    todoItems: TodoItem[],
    filterSelection: FilterSelection;
    setFilterSelection: Dispatch<SetStateAction<FilterSelection>>;
    filteredItems: TodoItem[];
    setFilteredItems: Dispatch<SetStateAction<TodoItem[]>>;
    onClickFilter: (selection: FilterSelection) => void;
    toggleTodoStatus: (id: string | number) => void;
    deleteTodo: (id: string | number) => void;
}

const TodoData: TodoItem[] = [{
    id: 1,
    isCompleted: false,
    content: "Make a todo List"
},
{
    id: 2,
    isCompleted: true,
    content: "Check off first item"
},
{
    id: 3,
    isCompleted: false,
    content: "Realize you already did 2 things today "
},
{
    id: 4,
    isCompleted: false,
    content: "Reward yourself with a nice, long nap"
}]; // TODO: Remove


export const TodoContext = createContext({} as ITodoContext);

export const TodoContextProvider: FC<IAppProps> = ({
    children,
}) => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>(TodoData);

    const [filterSelection, setFilterSelection] = useState<FilterSelection>('all');
    const [filteredItems, setFilteredItems] = useState<TodoItem[]>([]);
    const [renderItems, setRenderItems] = useState<TodoItem[]>([]);
    const onClickFilter = (selection: FilterSelection) => {
        setFilterSelection(selection);
    };
    const toggleTodoStatus = (id: string | number) => {
        const newItems = todoItems.map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return item;
        });
        setTodoItems(newItems);
    }

    const deleteTodo = (id: string | number) => {
        const newItems = todoItems.filter(item => item.id !== id);
        setTodoItems(newItems);
    }
    useEffect(() => {
        let filtered: TodoItem[] = [];
        if (filterSelection === 'Completed') {
            filtered = TodoData.filter(item => item.isCompleted);
        }
        if (filterSelection === 'Incomplete') {
            filtered = TodoData.filter(item => !item.isCompleted);
        }
        setFilteredItems(filtered);
        setRenderItems(filterSelection === 'all' ? todoItems : filtered) // TODO: Get from graphql
    }, [filterSelection, todoItems]); // TODO: Get from graphql


    const context = {
        renderItems,
        todoItems,
        filterSelection,
        setFilterSelection,
        filteredItems,
        setFilteredItems,
        onClickFilter,
        toggleTodoStatus,
        deleteTodo
    } as ITodoContext;


    return (
        <TodoContext.Provider value={context}>
            {children}
        </TodoContext.Provider>
    );
};