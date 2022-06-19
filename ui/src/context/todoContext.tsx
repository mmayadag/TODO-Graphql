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

export const TodoContext = createContext({} as ITodoContext);

export const TodoContextProvider: FC<IAppProps> = ({
    children,
}) => {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

    const [filterSelection, setFilterSelection] = useState<FilterSelection>('all');
    const [filteredItems, setFilteredItems] = useState<TodoItem[]>([]);
    const [renderItems, setRenderItems] = useState<TodoItem[]>([]);
    const onClickFilter = (selection: FilterSelection) => {
        setFilterSelection(selection);
    };
    const toggleTodoStatus = (id: string | number) => {
        const items = filterSelection === 'all' ? todoItems : filteredItems; // TODO: Get from graphql
        const newItems = items.map(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return item;
        });
        if (filterSelection === 'all') {
            setTodoItems(newItems);
        } else {
            setFilteredItems(newItems);
        }
    }

    const deleteTodo = (id: string | number) => {
        const newItems = todoItems.filter(item => item.id !== id);
        setTodoItems(newItems);
        const newItems1 = filteredItems.filter(item => item.id !== id); // TODO delete both
        setFilteredItems(newItems1);
    }
    useEffect(() => {
        let filtered: TodoItem[] = [];
        if (filterSelection === 'Completed') {
            filtered = todoItems.filter(item => item.isCompleted);
        }
        if (filterSelection === 'Incomplete') {
            filtered = todoItems.filter(item => !item.isCompleted);
        }
        setFilteredItems(filtered);
    }, [filterSelection, todoItems]); // TODO: Get from graphql

    useEffect(() => {
        const items = filterSelection === 'all' ? todoItems : filteredItems;
        setRenderItems(items);
    }, [filteredItems, todoItems]);

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