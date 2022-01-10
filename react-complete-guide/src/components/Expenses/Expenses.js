import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState('2021');

  const filteredExpenses = props.items.filter(expense  => {
    return expense.date.getFullYear().toString() === yearSelected ? true : false
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearSelected} onSelectYear={setYearSelected}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses;