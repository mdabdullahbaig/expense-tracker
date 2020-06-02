import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./bodyComponent.css";
import TransactionForm from "./transactionForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

const BodyComponent = () => {
  // let date = Date.now();

  const [transactions, setTransaction] = useState([
    {
      data: {
        money: "",
        note: ""
      }
    }
  ]);
  const addTransaction = data => {
    setTransaction([{ data }, ...transactions]);
  };

  // let sum = 0;
  // for (let i = 0; i < transactions.length; i++) {
  //   sum = sum + transactions[i].data.money;
  // }
  let sum = transactions.reduce((accumulator, currentValue) => {
   return accumulator + currentValue.data.money;
  }, 0);
  return (
    <div className="flex-container">
      <div className="left-box">
        <div className="left-box-in-1">
          <span className="mx-2">
            <FontAwesomeIcon className="font-icon mx-1" icon={faRupeeSign} />
            Your Balance:
            <b> {sum !== 0 ? sum : ""}</b>
            <br />
          </span>

          {transactions[0].data.money > 0 && (
            <span className="mx-2">
              <FontAwesomeIcon className="font-icon mx-1" icon={faRupeeSign} />
              Income:
              <b> {transactions[0].data.money}</b>
              <br />
            </span>
          )}

          {transactions[0].data.money < 0 && (
            <span className="mx-2">
              <FontAwesomeIcon className="font-icon mx-1" icon={faRupeeSign} />
              Expanse:
              <b> {-transactions[0].data.money}</b>
            </span>
          )}
        </div>

        <div className="left-box-in-2">
          <TransactionForm addTransaction={addTransaction} />
        </div>
        <div className="left-box-in-3">
          <p>
            <b>Negative</b> sign with Expense.
            <br />
            <b>No</b> sign with Income.
          </p>
        </div>
      </div>

      <div className="right-box">
        <div className="right-box-in-1">
          <h6>Transaction History</h6>
        </div>
        <div className="container">
          <div className="right-box-in-2">
            <table className="table">
              <thead>
                <tr key="1">
                  <th scope="col">Income</th>
                  <th scope="col">Expanse</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(trans => (
                  <tr key={uuidv4()}>
                    <td>{trans.data.money >= 0 ? trans.data.money : ""}</td>
                    <td>{trans.data.money < 0 ? -trans.data.money : ""}</td>
                    <td>{trans.data.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
