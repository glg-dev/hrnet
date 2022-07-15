import React from 'react';
import CreateForm from '../components/CreateForm';
import { Link } from 'react-router-dom';

const CreateEmployee = () => {
  return (
    <main className='create-employee'>
      <div className="header">
        <h2>Create Employee</h2>
        <Link to='/employees' className='to-employees'>View Current Employees</Link>
      </div>
      <CreateForm />
    </main>
  );
};

export default CreateEmployee;