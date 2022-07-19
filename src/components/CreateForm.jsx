import React from 'react';
import { useState } from 'react';
import { departmentsList } from '../datas/departmentsList';
import { statesList } from '../datas/statesList';
import Calendar from './DatePicker';
import DropdownMenu from './DropdownMenu';

const CreateForm = () => {

  const date = new Date();

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthDate, setBirthDate] = useState(date.toLocaleDateString("fr-FR"))
  const [startDate, setStartDate] = useState(date.toLocaleDateString("fr-FR"))
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [selectedState, setSelectedState] = useState(statesList[0].value)
  const [zipCode, setZipCode] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState(departmentsList[0].value)

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
        <Calendar setInputDate={setBirthDate} />
      </section>

      <section className="start">
        <label htmlFor="start">Start Date</label>
        <Calendar setInputDate={setStartDate}/>
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
          <DropdownMenu 
            options={statesList} 
            selected={statesList[0]}
            setInput={setSelectedState}
          />
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
        <DropdownMenu 
          options={departmentsList} 
          selected={departmentsList[0]} 
          setInput={setSelectedDepartment}
        />
      </section>

      <button type="submit">Save</button>
    </form>
  );
};

export default CreateForm;