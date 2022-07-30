import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table'
import { useState } from 'react';
import { useSelector } from 'react-redux';


const defaultData = [
  {
    firstName: 'Jim',
    lastName: 'Halpert',
    birthDate: '24/01/1970',
    startDate: '02/07/2018',
    street: '1 avenue du 1er janvier',
    city: 'Scranton',
    state: 'Pennsylvania',
    zipCode: '00001',
    department: 'Sales',
  },
  {
    firstName: 'Jimmy',
    lastName: 'McGill',
    birthDate: '16/08/1984',
    startDate: '04/02/2022',
    street: '2 rue du 2 février',
    city: 'Albuquerque',
    state: 'New Mexico',
    zipCode: '00002',
    department: 'Marketing',
  },
  {
    firstName: 'Ada',
    lastName: 'Thorne',
    birthDate: '15/12/1988',
    startDate: '20/08/2020',
    street: '3 boulevard du 3 mars',
    city: 'Birmingham',
    state: 'Washington',
    zipCode: '00003',
    department: 'Engineering',
  },
]

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

  const employees = useSelector(state => state.employee.employeesList)
  // console.log(employees);
  
  const [data, setData] = useState([...employees])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
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
  )
}

export default Table