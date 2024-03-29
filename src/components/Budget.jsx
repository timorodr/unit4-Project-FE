import { Link } from "react-router-dom"


export default function Budget({ budget }){

    const id = budget.url.split('/')[4]
    console.log(id)

    return (
        <div>
            <Link to={`/budget/${id}`}>
                <h1>{budget.type}</h1>
                <h1>{budget.amount}</h1>
            </Link>
        </div>
        )
}