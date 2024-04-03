import { Link, useLoaderData } from "react-router-dom"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { MdArrowOutward } from "react-icons/md";

export default function RowsPerPage({}){
    const allTransactions = useLoaderData()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const rows = allTransactions

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
  
  
      const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
      };

      return(
        <Paper sx={{ width: '100%', overflow: 'hidden'}}>
            {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}  */}
            <TablePagination
            rowsPerPageOptions={[5, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      )
}