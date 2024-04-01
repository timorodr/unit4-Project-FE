// import Budget from "../components/Budget"
import { useLoaderData, Form } from "react-router-dom"
import Button from '@mui/material/Button';
import React, {useEffect, useState} from 'react'
// import { createAction } from "../actions";
// import ColumnTypesGrid from "../components/Table";
import DataTable from "../components/Table";
import DoughnutChart from "../components/PieChart";
import Chart from 'chart.js/auto';
// import * as React from 'react';
import TransactionTable from "../components/Table";

// import { BarChart } from '@mui/x-charts/BarChart';
// import PieChartStuff from "../components/PieChart";
// import PieChart from '@mui/x-charts/PieChart';

export default function Index(props) {
    // const allTransactions = useLoaderData()
    // console.log(allTransactions)
    


    const [incomeTransactions, setIncomeTransactions] = useState([])
    const [expenseTransactions, setExpenseTransactions] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const allTransactions = await useLoaderData()
    //         setTransactions(allTransactions)
    //         setIncomeTransactions(allTransactions.filter((t) => t.type === "Income"))
    //         setExpenseTransactions(allTransactions.filter((t) => t.type === "Expense"))
    //     }
    //     fetchData()
    // }, [])

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     await createAction()
    //     const newTransactions = await useLoaderData()
    //     setTransactions(newTransactions)
    //     setIncomeTransactions(newTransactions.filter((t) => t.type === "Income"))
    //     setIncomeTransactions(newTransactions.filter((t) => t.type === "Expense"))
    // }

    // let incomeTransactions = allTransactions.filter((t) => t.type === "Income")
    // console.log(incomeTable)
   

    return (
        <>
            {/* <DoughnutChart/> */}
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

            <h2>Income Table</h2>
            <TransactionTable transactions={incomeTransactions} budget="Income"/>
            {/* {incomeTable} */}
            <h2>Expense Table</h2>
            <TransactionTable transactions={expenseTransactions} budget="Expense"/>

                {/* {allTransactions.map((transaction, i) => <Budget budget={transaction} key={i}/>)} */}

   

            
        </>
    )
}