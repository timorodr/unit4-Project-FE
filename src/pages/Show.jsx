import { Link, useLoaderData } from 'react-router-dom'

export default function Show(props) {
    const aTransaction = useLoaderData()

    return (
        <div>
            <h1>{aTransaction.category}</h1>
            <h1>{aTransaction.date}</h1>
            <h1>{aTransaction.note}</h1>
        </div>
    )
}