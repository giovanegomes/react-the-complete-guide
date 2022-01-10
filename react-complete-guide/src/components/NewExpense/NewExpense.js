import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const onSaveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const onAddNewExpenseHandler = () => setIsFormVisible(!isFormVisible);

  return <div className="new-expense">
    {isFormVisible ? (
      <ExpenseForm
        closeFormHandler={onAddNewExpenseHandler}
        onSaveExpenseData={onSaveExpenseDataHandler}
      />
    ) : (
      <button onClick={onAddNewExpenseHandler}>Add New Expense</button>
    )}
  </div>
};

export default NewExpense;