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


// const columns = [
//     { id: 'Type', label: 'Type', minWidth: 170 },
//     { id: 'Category', label: 'Category', minWidth: 100 },
//     {
//       id: 'Amount',
//       label: 'Amount',
//       minWidth: 170,
//       align: 'right',
//     //   format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'Date',
//       label: 'Date',
//       minWidth: 170,
//       align: 'right',
//     //   format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'Note',
//       label: 'Note',
//       minWidth: 170,
//       align: 'right',
//     //   format: (value) => value.toFixed(2),
//     },
//   ];

//   function createData(type, category, amount, date, note) {
//     // const density = population / size;
//     return { type, category, amount, date, note };
//   }

//   const rows = [
//     // createData({budget.type}),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
//   ];

  export default function Budget({ budget, transaction }){
    const allTransactions = useLoaderData()
    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // const rows = [
    //     // createData({budget.type}),
    //     // createData('China', 'CN', 1403500365, 9596961),
    //     // createData('Italy', 'IT', 60483973, 301340),
    //     // createData('United States', 'US', 327167434, 9833520),
    //     // createData('Canada', 'CA', 37602103, 9984670),
    //     // createData('Australia', 'AU', 25475400, 7692024),
    //     // createData('Germany', 'DE', 83019200, 357578),
    //     // createData('Ireland', 'IE', 4857000, 70273),
    //     // createData('Mexico', 'MX', 126577691, 1972550),
    //     // createData('Japan', 'JP', 126317000, 377973),
    //     // createData('France', 'FR', 67022000, 640679),
    //     // createData('United Kingdom', 'GB', 67545757, 242495),
    //     // createData('Russia', 'RU', 146793744, 17098246),
    //     // createData('Nigeria', 'NG', 200962417, 923768),
    //     // createData('Brazil', 'BR', 210147125, 8515767),
    //   ];
  
    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };


    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

                
                const id = budget.url.split('/')[4]
                console.log(id)
            
//                 return (
//                     <div>
//                         <table>
//                         <Link to={`/budget/${id}`}>
//                         <thead>
//                             <tr>
//                                 <th>Type</th>
//                                 <th>Category</th>
//                                 <th>Amount</th>
//                                 <th>Date</th>
//                                 <th>Note</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                         {/* {incomeTransactions2.map((transaction, id) => ( */}
                            
//                             <tr key={budget.id}> 
                            
//                                 <td>{budget.type}</td>
//                                 <td>{budget.category}</td>
//                                 <td>{budget.amount}</td>
//                                 <td>{budget.date}</td>
//                                 <td>{budget.note}</td>
//                             </tr>
//                         {/* ))} */}
//                         </tbody>
//                         </Link>
//                         </table>
//                     </div>
//         )
// }

//*** SEPERATOR */

// return (
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//                 <TableCell
//                   key={columns.id}
//                   align={columns.align}
//                   style={{ minWidth: columns.minWidth }}
//                   >
//                     <tr>
//                       {columns.map((column) => (
//                         <th sx={{alignItems: 'center'}} key={column.id}>{column.label}</th> // Access and display the label property
//                       ))}
//                     </tr>
//                     {/* {columns.map((column) => ({budget.type} */}
//                   {/* {columns.label[0].label} */}
//                 </TableCell>
//               {/* ))} */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {/* {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row) => {
//                 return ( */}
                    
//                     <TableRow hover role="checkbox" tabIndex={-1}>
//                     <Link to={`/budget/${id}`}>

//                             {budget.type}
//                             {budget.category}
//                             {budget.amount}
//                             {budget.date}
//                             {budget.note}
                        
//                       {/* return ( */}
//                     </Link>
//                     {columns.label}
//                     {/* {budget.map((x) => {
//                     const value = row[budget.id]; */}
//                         <TableCell>
//                           {/* {column.format && typeof value === 'number'
//                             ? column.format(value)
//                         : value} */}
//                         </TableCell>
//                       {/* ); */}
//                   </TableRow>
//                 {/* ); */}
//                {/* })} */}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 100]}
//         component="div"
//         count={allTransactions.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

//*** SEPERATOR */

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'type', label: 'Type', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 100 },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'note',
    label: 'Note',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },
];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

const rows = allTransactions

// export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link to={`/budget/${id}`} className="tableLink" style={{"width": "750"}}>
                          
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}
                            {value}
                        </Link>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
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
  );
  }