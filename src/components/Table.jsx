import React from 'react';
import { getPaginationRowModel, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table'
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
  
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([...employees])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  function handleDelete(id) {
    dispatch(removeEmployee(employees[id]))
  }

  useEffect(() => {
    if (filter) {
      const newData = employees.filter((employee) => {
        return Object
          .values(employee)
          .filter(value => typeof value === "string")
          .toString()
          .toLowerCase()
          .includes(filter)
      })
      setData([...newData])
    } else {
      setData([...employees])
    }
  }, [filter, employees])

  return (
    <>
      <div className='filter'>
        <input 
          type="text" 
          name="filter" 
          id="filter"
          placeholder='Search...'
          onChange={(e) => setFilter(e.target.value.toLowerCase())} 
        />
      </div>

    {!data.length ? (
      <div className='no-employees'>
        There is no employee to display…
        <Link to='/'>Back home</Link>
      </div>
    ) : (
      <>
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
          <div className="pagination">
            <div className="get-page">
              <button 
                className="to-first"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {'<<'}
              </button>
              <button 
                className="to-prev"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {'<'}
              </button>
              <div className="get-page__text">
                <div>Page</div>
                <div>
                  {table.getState().pagination.pageIndex + 1} of{' '}
                  {table.getPageCount()}
                </div>
              </div>
              <button 
                className="to-next"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {'>'}
              </button>
              <button 
                className="to-last"
                onClick={() => table.setPageIndex(table.getPageCount() -1)}
                disabled={!table.getCanNextPage()}
              >
                {'>>'}
              </button>
            </div>
            <div className="set-page">
              Go to page : 
              <input 
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  table.setPageIndex(page)
                }}
              />
            </div>
            <select
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    )}
    
    </>

  )
}

export default Table