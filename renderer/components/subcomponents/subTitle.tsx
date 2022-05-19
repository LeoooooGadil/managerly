import React from 'react'
import { ISubTitle } from '../../lib/interfaces'

const SubTitle: React.FC<ISubTitle> = (props) => {
  return (
    <span className='text-md font-bold'>
        {props.text}
    </span>
  )
}

export default SubTitle