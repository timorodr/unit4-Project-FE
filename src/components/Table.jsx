// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import { useLoaderData, Link } from "react-router-dom"
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


const columns = [
  { id: 'Type', label: 'Type', minWidth: 170 },
  { id: 'Category', label: 'Category', minWidth: 100 },
  {
    id: 'Amount',
    label: 'Amount',
    minWidth: 170,
    align: 'right',
  //   format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
  //   format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Note',
    label: 'Note',
    minWidth: 170,
    align: 'right',
  //   format: (value) => value.toFixed(2),
  },
];

function TransactionTableHeader({ transactions, budget, indie }) {
  // const allTransactions = useLoaderData()
  // console.log(allTransactions)
  // const filteredTransactions = allTransactions.filter((transaction) => budget === transaction.type)
  // const id = allTransactions
  // ** Cont to find way to access id of url 
  // const id = indie
  // console.log(id)
  // for(let i = 0; i < id.length; i++){
  //   let y = id[i]
  //   return y
  // }

  return (
        <Paper sx={{ width: '100%', overflow: "hidden"}}>
            <TableHead>
                <TableRow style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <TableCell
                  // key={columns.id}
                  // align={{ align: "right" }}
                  style={{ minWidth: columns[0].minWidth }}
                  >
                <th>Type</th>
                </TableCell>
                <TableCell
                  // key={columns.id}
                  // align={columns.align}
                  style={{ minWidth: columns[1].minWidth}}
                  >
                <th>Category</th>
                </TableCell>
                <TableCell
                  // key={columns.id}
                  align={columns[2].align}
                  style={{ minWidth: columns[2].minWidth }}
                  >
                <th>Amount</th>
                </TableCell>
                <TableCell
                  // key={columns.id}
                  // align={columns[3].align}
                  style={{ minWidth: columns[3].minWidth}}
                  >
                <th>Date</th>
                </TableCell>
                <TableCell
                  // key={columns.id}
                  // align={columns[4].align}
                  style={{ minWidth: columns[4].minWidth}}
                  >
                <th>Note</th>
                </TableCell>
            </TableRow>
          </TableHead>
          </Paper>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Type</th>
    //       <th>Category</th>
    //       <th>Amount</th>
    //       <th>Date</th>
    //       <th>Note</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {filteredTransactions.map((transaction, id) => (
    //       // <Link to={`/budget/${id}`}>
    //         <tr key={transaction.id}> 
          
    //         <td>{transaction.type}</td>
    //         <td>{transaction.category}</td>
    //         <td>{transaction.amount}</td>
    //         <td>{transaction.date}</td>
    //         <td>{transaction.note}</td>
    //       </tr>
    //     // </Link>
    //     ))}
    //     </tbody>
    // </table>
  );
}



export default TransactionTableHeader;