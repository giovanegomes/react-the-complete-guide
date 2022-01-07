import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return props.expenses.map((expense) => (
    <div className="expenses">
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </div>
  ))
}

export default Expenses;