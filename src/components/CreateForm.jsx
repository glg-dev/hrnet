import React from 'react';
import { departmentsList } from '../datas/departmentsList';
import { statesList } from '../datas/statesList';
import Calendar from './DatePicker';
import DropdownMenu from './DropdownMenu';

const CreateForm = () => {
  return (
    <form>
      <section className='firstname'>
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" />
      </section>

      <section className='lastname'>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" />
      </section>

      <section className="birth">
        <label htmlFor="birth">Date of Birth</label>
        <Calendar />
      </section>

      <section className="start">
        <label htmlFor="start">Start Date</label>
        <Calendar />
      </section>

      <fieldset>
        <legend>Address</legend>
        <section className="street">
          <label htmlFor="street">Street</label>
          <input type="text" name='street' id='street' />
        </section>
        <section className="city">
          <label htmlFor="city">City</label>
          <input type="text" name='city' id='city' />
        </section>
        <section className="state">
          <label htmlFor="state">State</label>
          <DropdownMenu options={statesList} selected={statesList[0]}/>
        </section>
        <section className="zip-code">
          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" name="zip-code" id="zip-code" />
        </section>
      </fieldset>

      <section className='department'>
        <label htmlFor="deparment">Department</label>
        <DropdownMenu options={departmentsList} selected={departmentsList[0]} />
      </section>

      <button type="submit">Save</button>
    </form>
  );
};

export default CreateForm;