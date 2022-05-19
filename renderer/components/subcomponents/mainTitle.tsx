import React from 'react'
import { ISubTitle } from '../../lib/interfaces'

const MainTitle: React.FC<ISubTitle> = (props) => {
  return (
    <span className='text-xl font-bold'>
        {props.text}
    </span>
  )
}

export default MainTitle