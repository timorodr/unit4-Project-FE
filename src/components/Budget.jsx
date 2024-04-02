import { Link, useLoaderData } from "react-router-dom"

export default function Budget({ budget, transactions }){
    const allTransactions = useLoaderData()
  // console.log(allTransactions)
    // const filteredTransactions = allTransactions.filter((transaction) => transactions === transaction.type)
    // console.log(filteredTransactions)
    const incomeTransactions2 = allTransactions.filter((t) => t.type === "Income");

            
                {/* <table>
                <thead>
                <tr>
                <th>Type</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Note</th>
                </tr>
                </thead>
                <tbody>
                {filteredTransactions.map((transaction, id) => (
                    // <Link to={`/budget/${id}`}>
                    <tr key={transaction.id}> 
                    
                    <td>{transaction.type}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.note}</td>
                    </tr>
                    // </Link>
                    ))}
                    </tbody>
                </table> */}
                const id = budget.url.split('/')[4]
                console.log(id)
            
                return (
                    <div>
                        <table>
                        <Link to={`/budget/${id}`}>
                        <thead>
                            <tr>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Note</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {incomeTransactions2.map((transaction, id) => ( */}
                            
                            <tr key={budget.id}> 
                            
                                <td>{budget.type}</td>
                                <td>{budget.category}</td>
                                <td>{budget.amount}</td>
                                <td>{budget.date}</td>
                                <td>{budget.note}</td>
                            </tr>
                        {/* ))} */}
                        </tbody>
                        </Link>
                        </table>
                    </div>
        )
}