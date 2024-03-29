import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

import { StackExchangeTag } from '../../utilities/data-types'; 


export default function TagsTable ({tags}: {tags: StackExchangeTag[] | undefined | null}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="stack overflow tags table">
        <TableHead>
          <TableRow>
            <TableCell>Tag Name</TableCell>
            <TableCell align="right">Number of Posts</TableCell>
          </TableRow>
        </TableHead>
        {tags &&
          <TableBody>
            {tags.map((tag, index) => (
              <TableRow key={tag.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{tag.name}</TableCell>
                <TableCell align="right">{tag.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        }
      </Table>
    </TableContainer>
  );
}