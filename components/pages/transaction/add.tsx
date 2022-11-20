import React from 'react';

const AddTransaction = () => {
  return (
    <>
      <h2 className="text-center font-bold text-lg pb-2">Transaction</h2>
      <div className=" flex justify-center items-center flex-col gap-3">
        <div className="form-control w-full max-w-xs">
          <input type="text" placeholder="Salary, House Rent, Expenses..." className="input input-bordered w-full max-w-xs" />
        </div>
        <select className="select w-full max-w-xs select-bordered">
          <option disabled>Select...</option>
          <option>Savings</option>
          <option>Investment</option>
          <option>Expense</option>
        </select>
        <div className="form-control w-full max-w-xs">
          <input type="text" placeholder="Amount" className="input input-bordered w-full max-w-xs" />
        </div>
        <button className="btn btn-primary btn-wide">Make Transaction</button>
      </div>
    </>
  );
};

export default AddTransaction;
