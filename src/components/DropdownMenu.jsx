import React from 'react';
import Select from 'react-select';

const DropdownMenu = ({ options, selected, setInput }) => {

  const customStyles = {
    option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected && 'green',
    color: state.isSelected ? 'white' : 'green',
    cursor: 'pointer'
  }),
    control: (provided, state) => ({
    ...provided,
    border: state.isSelected && '1px solid green',
    boxShadow: 'none'
  }),
  }
  
  function handleChange(e) {
    console.log(e.value);
    setInput(e.value)
  }

  return (
    <Select 
      options={options}
      defaultValue={selected}
      styles={customStyles}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default DropdownMenu;