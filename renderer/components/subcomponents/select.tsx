import React from 'react'
import Select from 'react-select'
import { ISelect } from '../../lib/interfaces'

const SelectCustom: React.FC<ISelect> = (props) => {
  return (
    <Select 
        options={props.options}
        onChange={props.onChange}
        value={props.value}
        className={`react-select w-60 text-dark text-sm`}
        placeholder={props.placeholder}
        classNamePrefix="react-select"
    />
  )
}

export default SelectCustom