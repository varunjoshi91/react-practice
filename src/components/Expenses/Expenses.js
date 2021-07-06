import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear}/>
        <ExpenseItem
          amount={props.items[0].amount}
          title={props.items[0].title}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          amount={props.items[1].amount}
          title={props.items[1].title}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          amount={props.items[2].amount}
          title={props.items[2].title}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          amount={props.items[3].amount}
          title={props.items[3].title}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
