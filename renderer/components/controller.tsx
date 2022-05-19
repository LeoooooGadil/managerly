import React from 'react'
import { IController } from '../lib/interfaces'

const Controller: React.FC<IController> = (props) => {
  return (
    <div className='h-14 flex flex-row-reverse items-center'>
        {props.children}
    </div>
  )
}

export default Controller