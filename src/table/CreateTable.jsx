import React, { useMemo, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import '../components/table.css'
import { todoListData, addToDo } from '../app/todo';
import { Container } from '@mui/material';

const CreateTable = () => {
    const dispatch = useDispatch();

    const todo = useSelector((state) => (state.todo.todo))
    
    const columns = useMemo(() => COLUMNS, [todo])
    const data = useMemo(() => todo, [todo])
    
    const [ userInput, setUserInput ] = useState('');

    useLayoutEffect(() => {
        dispatch(todoListData(data))
    }, [data])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        rows, 
        prepareRow,
    } = useTable({
        columns,
        data
    })

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo({id: todo.length+1, task: userInput,  complete: false}))
        setUserInput("");
    }

    return (
        <Container>
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
        <table {...getTableProps()}>
            <thead> 
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {
                                            column.render('Footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
        </Container>
    );
}
 
export default CreateTable;