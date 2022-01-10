import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState('2021'); 
  console.log(yearSelected);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearSelected} onSelectYear={setYearSelected}/>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expenses;