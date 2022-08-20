import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calendar = ({ setInputDate }) => {

  const [displayedDate, setDisplayedDate] = useState(new Date())

  function handleChange(e) {
    setDisplayedDate(e)
    setInputDate(e?.toLocaleDateString("fr-FR"))
  }

  return (
    <DatePicker 
      selected={displayedDate && displayedDate}
      onChange={(e) => handleChange(e)} 
      dateFormat= "dd/MM/yyyy"
      closeOnScroll={true}
      showWeekNumbers
      isClearable
      clearButtonClassName="clear-button"
    />
  );
};

export default Calendar;