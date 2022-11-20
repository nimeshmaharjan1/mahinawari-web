import ExpenseTracker from '@components/pages/expense-tracker';
import AddTransaction from '@components/pages/transaction/add';
import React from 'react';
import MainLayout from '../components/layouts/Main';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div className="grid grid-cols-12 pb-6">
      <section className="col-span-6">
        <ExpenseTracker></ExpenseTracker>
      </section>
      <section className="col-span-6">
        <AddTransaction></AddTransaction>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
