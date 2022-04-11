import { format } from 'date-fns'
// import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id',
        disableFilters: true,
    },
    {
        Header: 'Todo List',
        Footer: 'Todo List',
        accessor: 'task',
    },
    {
        Header: 'Action',
        Footer: 'Action',
        accessor: 'complete',
    },

]