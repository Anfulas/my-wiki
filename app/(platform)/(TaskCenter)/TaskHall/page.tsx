"use client"
import { DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow } from '@carbon/react'
import { headers } from 'next/headers';
import React from 'react'
//import CheckboxGroup from '@carbon/CheckboxGroup';
type Task = {
  id: string;
  client: string;
  contact: string;
  country: string;
  industry: string;
  taskStatus: string;
};

const tasksData: Task[] = [
  { id: '1', client: 'Client A', contact: 'Contact A', country: 'Country A', industry: 'Industry A', taskStatus: 'Pending' },
  { id: '2', client: 'Client B', contact: 'Contact B', country: 'Country B', industry: 'Industry B', taskStatus: 'In Progress' },
  { id: '3', client: 'Client C', contact: 'Contact C', country: 'Country C', industry: 'Industry C', taskStatus: 'Completed' },
  // Add more tasks as needed
];

export const TaskHall = () => (
  <DataTable rows={tasksData} headers={[]}>
    {({ rows }) => (
      <TableContainer title="DataTable">
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

export default TaskHall;