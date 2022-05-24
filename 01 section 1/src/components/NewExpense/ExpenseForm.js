import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

    // Alternate way of using states in one state
    // const [userInput, setuserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChnageHandler =(event)=>{
        setenteredTitle(event.target.value);
        // setuserInput({
        //     ...userInput, enteredTitle: event.target.value }) //alt1
        // setuserInput((prevState)=>{
        //     return { ...prevState, enteredTitle: event.target.value};   //alt2
        // })

    };
    const amountChangedHandler =(event)=>{
        setenteredAmount(event.target.value);
        // setuserInput({...userInput, enteredAmount: event.target.value }) //alt1
    };
    const dateChangeHandler =(event)=>{
        setenteredDate(event.target.value);
        // setuserInput({...userInput, enteredDate: event.target.value })  //alt1
    };
    const submitHandler=(event)=>{
        event.preventDefault();  // cancel the event if it cancelabel
        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChnageHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit' >Add Expense </button>
        </div>
    </form>
  )
}

export default ExpenseForm