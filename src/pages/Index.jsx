import Budget from "../components/Budget"
import { useLoaderData, Form } from "react-router-dom"
import Button from '@mui/material/Button';
import * as React from 'react';

// import { BarChart } from '@mui/x-charts/BarChart';
import PieChartStuff from "../components/PieChart";
import PieChart from '@mui/x-charts/PieChart';

export default function Index(props) {
    const allTransactions = useLoaderData()
    // allTransactions.map((item, i) => <Budget budget={item}/>)
    console.log(allTransactions[0].amount)
    allTransactions.map((money, i) => money)
   

    return (
        <>
            <h1>Add an Expense</h1>
            <Form action="/create" method="POST">
                <label htmlFor="type">
                    <input type="text" name="type" id="type" placeholder="Expense or Income"/>
                </label>
                <label htmlFor="category">
                    <input type="text" name="category" id="category" placeholder="category"/>
                </label>
                <label htmlFor="amount">
                    <input type="number" name="amount" id="amount" placeholder="amount"/>
                </label>
                <label htmlFor="date">
                    <input type="date" name="date" id="date" />
                </label>
                <label htmlFor="note">
                    <input type="text" name="note" id="note" placeholder="Add a note"/>
                </label>
                <Button variant="contained" type="submit">Add Income or Expense</Button>
            </Form>
            
            <br />
            {allTransactions.map((transaction, i) => <Budget budget={transaction} key={i}/>)}

   
            <PieChartStuff/>
            
        </>
    )
}