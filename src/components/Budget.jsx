import { Link } from "react-router-dom"


export default function Budget({ budget }){

    const id = budget.url.split('/')[4]
    console.log(id)

    return (
        <div>
            <Link to={`/budget/${id}`}>
                <h1>{budget.category}</h1>
            </Link>
        </div>
        )
}