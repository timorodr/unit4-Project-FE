import Budget from "../components/Budget"
import { useLoaderData, Form } from "react-router-dom"
import Button from '@mui/material/Button';
import React, {useEffect, useState} from 'react'
// import { createAction } from "../actions";
// import ColumnTypesGrid from "../components/Table";
import DataTable from "../components/Table";
import DoughnutChart from "../components/PieChart";
import Chart from 'chart.js/auto';
import TransactionTableHeader from "../components/Table";
import RowsPerPage from "../components/RowsPerPage";
// import * as React from 'react';
// import TransactionTable from "../components/Table";

// import { BarChart } from '@mui/x-charts/BarChart';
// import PieChartStuff from "../components/PieChart";
// import PieChart from '@mui/x-charts/PieChart';

export default function Index(props) {
    const allTransactions = useLoaderData()
    console.log(allTransactions)
    


    // const [transactions, setTransactions] = useState([])
    // const [incomeTransactions, setIncomeTransactions] = useState([])
    // const [expenseTransactions, setExpenseTransactions] = useState([])

    // const incomeTransactions2 = allTransactions.filter((t) => t.type === "Income");
    // const expenseTransactions2 = allTransactions.filter((t) => t.type === "Expense");
    // const filteredTransactions = allTransactions.filter((transaction) => props.budget === transaction.type)
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
   
    const expenseTransactions2 = allTransactions.filter(transaction => transaction.type === "Expense");

    return (
        <>
            {/* <DoughnutChart/> */}
            <h1 className="app-title">EasyMoney</h1>
            <h1>Start Tracking</h1>
            <Form action="/create" method="POST">
                <label htmlFor="type">
                    <select name="type" id="type">
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    {/* <input type="text" name="type" id="type" placeholder="Expense or Income"/> */}
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
                <Button variant="contained" type="submit" style={{background: "green"}}>Add Income or Expense</Button>
            </Form>
            
            <br />

            <h2>Income Table</h2>
            <TransactionTableHeader/>
            {/* <Budget/> */}
            {/* <Budget budget={allTransactions}/> */}
            {/* <Budget transactions={incomeTransactions} budget="Income"/> */}
            {/* {allTransactions.map((transactions, i) => (
                transactions.type === "Income" ? (
                    <Budget budget={transactions} transactions="Income" key={i}/>
                    ) : null 
                ))} */}
            {/* {allTransactions.filter(transactions => transactions.type === "Income") ? 
                (<Budget budget={transactions} transactions="Income" />
            ) : null} */}
            {/* {allTransactions.map((transaction, i) => <Budget budget={transaction} transactions="Income" key={i}/>)} */}
            {/* <TransactionTable transactions={incomeTransactions} budget="Income"/> */}
            {allTransactions.filter(transaction => transaction.type === "Income").map((expenseTransactions2, i) => (
                <Budget budget={expenseTransactions2} key={i}/>
                ))}
            {/* {incomeTable} */}
            <RowsPerPage/>
            <h2>Expense Table</h2>
                <TransactionTableHeader/>
            {allTransactions.filter(transaction => transaction.type === "Expense").map((expenseTransactions2, i) => (
                <Budget budget={expenseTransactions2} key={i}/>
            ))}

            <RowsPerPage/>
            {/* <Budget transactions={expenseTransactions2} key="expenseTable" /> */}
          {/* {allTransactions.map((transactions, i) => (
                transactions.type === "Expense" ? (
                    <Budget budget={transactions} key={i}/>
                ) : null
            ))} */}
            {/* <Budget budget={expenseTransactions}/> */}
            {/* {filteredTransactions.map((transaction, i) => <TransactionTable transactions={expenseTransactions} budget="Expense" />)} */}

            {/* {allTransactions.map((transactions, i) => <Budget budget={transactions - transactions.length} transactions="Expense" key={i}/>)} */}

   

            
        </>
    )
}