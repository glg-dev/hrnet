import React from 'react';
import { useState } from 'react';
import { departmentsList } from '../datas/departmentsList';
import { statesList } from '../datas/statesList';
import Calendar from './DatePicker';
import DropdownMenu from './DropdownMenu';

const CreateForm = () => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')

  function submitForm(e) {
    e.preventDefault()
    console.log(firstname, lastname, birthDate, startDate, street, city, selectedState, zipCode, selectedDepartment);
  }
  
  return (
    <form onSubmit={submitForm}>
      <section className='firstname'>
        <label htmlFor="firstname">First Name</label>
        <input 
          type="text" 
          name="firstname" 
          id="firstname"
          onChange={(e)=> setFirstname(e.target.value)}
        />
      </section>

      <section className='lastname'>
        <label htmlFor="lastname">Last Name</label>
        <input 
          type="text" 
          name="lastname" 
          id="lastname" 
          onChange={(e) => setLastname(e.target.value)}
        />
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
          <input 
            type="text" 
            name='street' 
            id='street'
            onChange={(e) => setStreet(e.target.value)} 
          />
        </section>
        <section className="city">
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            name='city' 
            id='city' 
            onChange={(e) => setCity(e.target.value)}
          />
        </section>
        <section className="state">
          <label htmlFor="state">State</label>
          <DropdownMenu options={statesList} selected={statesList[0]}/>
        </section>
        <section className="zip-code">
          <label htmlFor="zip-code">Zip Code</label>
          <input 
            type="number" 
            name="zip-code" 
            id="zip-code" 
            onChange={(e) => setZipCode(e.target.value)}
          />
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