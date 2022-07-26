import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table'
import { useState } from 'react';

const defaultData = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    birthDate: '24/01/1970',
    startDate: '02/07/2018',
    department: 'Sales',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    birthDate: '16/08/1984',
    startDate: '04/02/2022',
    department: 'Marketing',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    birthDate: '15/12/1988',
    startDate: '20/08/2020',
    department: 'Engineering',
    progress: 10,
  },
]

const columns = [
  {
    accessorKey: 'firstName',
    cell: info => info.getValue(),
    header: () => <span>First Name</span>,
  },
  {
    accessorFn: row => row.lastName,
    id: 'lastName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  },
  {
    accessorKey: 'birthDate',
    header: () => 'Date of Birth',
  },
  {
    accessorKey: 'startDate',
    header: () => <span>Start Date</span>,
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
  },
]

const Table = () => {
  const [data, setData] = useState([...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table