import Budget from "../components/Budget"
import { useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allTransactions = useLoaderData()

    return (
        <>
            <h1>Index</h1>
            <br />
            {allTransactions.map((transaction, i) => <Budget budget={transaction} key={i}/>)}
        </>
    )
}