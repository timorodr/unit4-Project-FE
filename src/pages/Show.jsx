import { Link, useLoaderData, Form } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button';


export default function Show(props) {
    const aTransaction = useLoaderData()
    const id = aTransaction?.url.split('/')[4]
    console.log(id)

    const [isEditting, setIsEditting] = useState(false);

    const handleEditClick = () => {
        setIsEditting(!isEditting)
    }


    return (
        <div style={{textAlign: "center"}} id='show'>
            <h1 className='transaction-amount'>${aTransaction.amount}</h1>
            <h2 className='transaction-date'>{aTransaction.date}</h2>
            

            <div className="transaction-details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 1047 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className='transaction-label'>Type:</span>
                <span>{aTransaction.type}</span>
                
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className='transaction-label'>Category:</span>
                <span>{aTransaction.category}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className='transaction-label'>Note:</span>
                <span>{aTransaction.note}</span>
                </div>
            </div>

            <br />
            <br />

            <Button variant="contained" type="submit" onClick={handleEditClick} style={{background: "green"}}>{isEditting ? 'Close Edit' : 'Edit Transaction'}</Button>
            {/* <button onClick={handleEditClick}>{isEditting ? 'Close Edit' : 'Edit Transaction'}</button> */}

            <br />
            <br />

            {isEditting && (
            <Form action={`/update/${id}/`} method='POST'>
                <label htmlFor="type">
                    Update your Transaction
                    <input type="text" name="type" id="type" defaultValue={aTransaction.type}/>
                </label>

                <label htmlFor="category">
                    <input type="text" name="category" id="category" defaultValue={aTransaction.category}/>
                </label>

                <label htmlFor="amount">
                    <input type="number" name="amount" id="amount" defaultValue={aTransaction.amount}/>
                </label>

                <label htmlFor="date">
                    <input type="date" name="date" id="date" defaultValue={aTransaction.date}/>
                </label>

                <label htmlFor="note">
                    <input type="text" name="note" id="note" defaultValue={aTransaction.note}/>
                </label>
                <button>Update Transaction</button>
            </Form>
            )}

            <br />

            <Form action={`/delete/${id}/`} method="POST">
                <Button variant='contained' style={{background: "red", padding: 10}} type="submit">Delete Transaction</Button>
            </Form>
            <br />
            <br />
            <hr />
            <br />
            <br />

            <Link to='/'>
                <Button>Back to Home</Button>
            </Link>
        </div>
    )
}

// import { Link, useLoaderData, useState, Form } from 'react-router-dom';

// export default function Show(props) {
//   const aTransaction = useLoaderData();
//   const id = aTransaction?.url.split('/')[4];
//   console.log(id);

//   const [isEditting, setIsEditting] = useState(false);

//   const handleEditClick = () => {
//     setIsEditting(!isEditting);
//   };

//   return (
//     <div>
//       <h1>{aTransaction.amount}</h1>
//       <h2>{aTransaction.date}</h2>

//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <span>Type:</span>
//           <span>{aTransaction.type}</span>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <span>Category:</span>
//           <span>{aTransaction.category}</span>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <span>Note:</span>
//           <span>{aTransaction.note}</span>
//         </div>
//       </div>

//       <br />

//       <button onClick={handleEditClick}>{isEditting ? 'Close Edit' : 'Edit Transaction'}</button>

//       {isEditting && (
//         <Form action={`/update/${id}/`} method='POST'>
//           <label htmlFor="type">
//             Rename your Transaction
//             <input type="text" name="type" id="type" defaultValue={aTransaction.type} />
//           </label>

//           <label htmlFor="category">
//             <input type="text" name="category" id="category" defaultValue={aTransaction.category} />
//           </label>

//           <label htmlFor="amount">
//             <input type="number" name="amount" id="amount" defaultValue={aTransaction.amount} />
//           </label>

//           <label htmlFor="date">
//             <input type="date" name="date" id="date" defaultValue={aTransaction.date} />
//           </label>

//           <label htmlFor="note">
//             <input type="text" name="note" id="note" defaultValue={aTransaction.note} />
//           </label>
//           <button>Update Transaction</button>
//         </Form>
//       )}

//       <br />

//       <Form action={`/delete/${id}/`} method="POST">
//         <button>Delete Transaction</button>
//       </Form>

//       <br />
//       <hr />
//       <br />

//       <Link to='/'>
//         <button>Back to Home</button>
//       </Link>
//     </div>
//   );
// }