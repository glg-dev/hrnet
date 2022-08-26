import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeEmployee } from '../feature/employeeSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const columns = [
  {
    accessorKey: 'firstname',
    header: 'First Name',
  },
  {
    accessorKey: 'lastname',
    header: 'Last Name',
  },
  {
    accessorKey: 'birthDate',
    header: 'Date of Birth',
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
  },
  {
    accessorKey: 'street',
    header: 'Street',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'selectedState',
    header: 'State',
  },
  {
    accessorKey: 'zipCode',
    header: 'Zip Code',
  },
  {
    accessorKey: 'selectedDepartment',
    header: 'Department',
  },
]

const Table = () => {

  const employees = useSelector(state => state?.employee.employeesList)
  const dispatch = useDispatch()
  
  const [data, setData] = useState([...employees])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  function handleDelete(id) {
    dispatch(removeEmployee(employees[id]))
  }
  
  useEffect(() => {
    setData([...employees])
  }, [employees])


  return !employees.length ? (
        <div className='no-employees'>
          There is no employee to display…
          <Link to='/'>Back home</Link>
        </div>
      ) : (
        <div className="table__container">
          <table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                  <td onClick={() => handleDelete(row.id)}>
                    <span className='delete-button'>x</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    
      
    
}

export default Table