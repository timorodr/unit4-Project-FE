import { Link, useLoaderData, Form } from 'react-router-dom'

export default function Show(props) {
    const aTransaction = useLoaderData()
    const id = aTransaction?.url.split('/')[4]
    console.log(id)

    return (
        <div>
            <h1>{aTransaction.category}</h1>
            <h1>{aTransaction.date}</h1>
            <h1>{aTransaction.note}</h1>

            <Form action={`/update/${id}/`} method='POST'>
                <label htmlFor="type">
                    Rename your Transaction
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

            <br />

            <Form action={`/delete/${id}/`} method="POST">
                <button>Delete Transaction</button>
            </Form>

            <br />
            <hr />
            <br />

            <Link to='/'>
                <button>Back to Home</button>
            </Link>
        </div>
    )
}