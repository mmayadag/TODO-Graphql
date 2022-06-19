export type FilterType = {
    title: string;
    type: FilterSelection;
}

export type FilterSelection = 'all' | 'Completed' | 'Incomplete'