import React from 'react';

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
      borderRadius: 30,
      spacing: 10,
    },
  ],
};

const config = {
  data: data,
  options: {
    cutout: 110,
  },
};

enum FixtureTypes {
  savings = 'Savings',
  expense = 'Expense',
  investment = 'Investment',
}

const ExpenseTracker = () => {
  const fixtures = [
    {
      type: FixtureTypes.savings,
      color: 'rgb(54, 162, 235)',
      percent: 45,
    },
    {
      type: FixtureTypes.investment,
      color: 'rgb(255, 205, 86)',
      percent: 20,
    },
    {
      type: FixtureTypes.expense,
      color: 'rgb(255, 99, 132)',
      percent: 10,
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...config}></Doughnut>
          <h3 className="font-bold text-center absolute top-28 left-0 right-0 mx-auto">
            Total
            <span className="block text-3xl text-secondary">$0</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          {fixtures.map((fixture) => {
            return (
              <div className="labels flex justify-between" key={fixture.type}>
                <div className="flex gap-2">
                  <div className={`w-2 h-2 rounded py-3`} style={{ backgroundColor: fixture.color }}></div>
                  <h3>{fixture.type}</h3>
                </div>
                <h3 className="font-bold">{fixture.percent}%</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
