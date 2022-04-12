import React, { useMemo, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table'
import '../components/table.css'
import { todoListData, addToDo, removeToDo, completeToDo, isUpdate, updateToDo } from '../app/todo';
import { Container } from '@mui/material';

const CreateTable = () => {

    const dispatch = useDispatch();
    const todo = useSelector((state) => (state.todo.todo))
    const value = useSelector((state) => (state.todo.value))

    const [ buttonName, setButtonName ] = useState('Add');
    const [ userInput, setUserInput ] = useState('');
    const [ updateId, setUpdateId] = useState(0);

    const updateFunction = (e) => {
        let id = e.target.getAttribute('id');
        let task = e.target.getAttribute('task');
        let buttonName = e.target.getAttribute('buttonName');
        setUpdateId(id);
        setButtonName(buttonName);
        setUserInput(buttonName === 'Add' ? '' : task);
    }

    const COLUMNS = [
        {
            Header: 'ID',
            Footer: 'ID',
            accessor: 'id',
            disableFilters: true,
        },
        {
            Header: 'Todo List',
            Footer: 'Todo List',
            accessor: 'task'
        },
        {
            Header: 'Status',
            Footer: 'Status',
            accessor: props => (props.complete === true ? 'Completed' : <button onClick={() => dispatch(completeToDo({id:props.id}))}>Done</button>),
        },
        {
            Header: 'Action',
            Footer: 'Action',
            accessor: 'action',
            Cell: props => (<><button id={props.row.values.id} task={props.row.values.task} buttonName="Update" onClick={updateFunction}>Update</button> <button onClick={() => dispatch(removeToDo({id:props.row.values.id}))}>Delete</button></>),
        },
    ]
    
    const columns = useMemo(() => COLUMNS, [todo])
    const data = useMemo(() => todo, [todo])

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
        let transaction = e.target.getAttribute('transaction');
        e.preventDefault();
        if(transaction === 'Add') {
            console.log('add');
            console.log(value);
            console.log(userInput);
        }else{
            console.log('update');
            console.log(value);
            console.log(userInput);
        }
        dispatch(transaction === 'Add' ? addToDo({id: value, task: userInput, complete: false}) : updateToDo({id: updateId, task: userInput, complete: false}))
        setUserInput("");
        setButtonName('Add');
    }

    return (
        <Container>
        <form transaction={buttonName} onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/> 
            <button>{buttonName}</button> {buttonName == 'Update' ? <button onClick={updateFunction} buttonName="Add">Cancel</button> : ''}
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