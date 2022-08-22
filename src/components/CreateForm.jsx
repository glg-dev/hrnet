import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { departmentsList } from '../datas/departmentsList';
import { statesList } from '../datas/statesList';
import { addInList } from '../feature/employeeSlice';
import Calendar from './DatePicker';
import DropdownMenu from './DropdownMenu';
import Modal from './Modal/Modal';

const CreateForm = () => {

  const date = new Date();
  const dispatch = useDispatch()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birthDate, setBirthDate] = useState(date.toLocaleDateString("fr-FR"))
  const [startDate, setStartDate] = useState(date.toLocaleDateString("fr-FR"))
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [selectedState, setSelectedState] = useState(statesList[0])
  const [zipCode, setZipCode] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState(departmentsList[0])
  const [isSubmitted, setIsSubmitted] = useState(false)

  let id = 1
  const employees = useSelector(state => state?.employee.employeesList)
  if (employees.length) {
    id = Math.max(...employees.map(employee => employee.id))+1
  }
  
  const newEmployee = {
    id,
    firstname,
    lastname : lastname.toUpperCase(),
    birthDate,
    startDate,
    street,
    city,
    selectedState,
    zipCode,
    selectedDepartment
  }

  function resetInputs() {
    setFirstname('')
    setLastname('')
    setBirthDate(date.toLocaleDateString("fr-FR"))
    setStartDate(date.toLocaleDateString("fr-FR"))
    setStreet('')
    setCity('')
    setSelectedState(statesList[0])
    setZipCode('')
    setSelectedDepartment(departmentsList[0])
  }

  function submitForm(e) {
    e.preventDefault()
    dispatch(addInList(newEmployee))
    resetInputs()
    setIsSubmitted(true)
  }  

  function hide() {
    setIsSubmitted(false)
  }


  return (
    <>
      <form onSubmit={submitForm}>
        <section className='firstname'>
          <label htmlFor="firstname">First Name</label>
          <input 
            type="text" 
            name="firstname" 
            id="firstname"
            onChange={(e)=> setFirstname(e.target.value)}
            value={firstname}
            required
          />
        </section>

        <section className='lastname'>
          <label htmlFor="lastname">Last Name</label>
          <input 
            type="text" 
            name="lastname" 
            id="lastname" 
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            required
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
              value={street}
              required
            />
          </section>
          <section className="city">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              name='city' 
              id='city' 
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </section>
          <section className="state">
            <label htmlFor="state">State</label>
            <DropdownMenu 
              options={statesList} 
              selected={selectedState}
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
              value={zipCode}
              required
            />
          </section>
        </fieldset>

        <section className='department'>
          <label htmlFor="deparment">Department</label>
          <DropdownMenu 
            options={departmentsList} 
            selected={selectedDepartment} 
            setInput={setSelectedDepartment}
          />
        </section>

        <button type="submit" className='save-button'>Save</button>
      </form>
      {
        isSubmitted && (
          <Modal title='Congratulations !' content='Employee have been created.' showModal hideModal={hide}/>
        )
      }
    </>
  );
};

export default CreateForm;