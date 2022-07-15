import React from 'react';
import Select from 'react-select';

const DropdownMenu = ({ options, selected }) => {


  return (
    <Select 
      options={options}
      defaultValue={selected}
    />
  );
};

export default DropdownMenu;