import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

import React, { useState } from "react";

function ExpenseItem(props) {
  // Can only have one root HTML tag

  const [title, setTitle] = useState(props.title); // returns an array [origValue, changeHandler]

  const clickHandler = () => {
    setTitle('value changed');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
