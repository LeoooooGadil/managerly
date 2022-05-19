import React from 'react'
import { ILoggedInLayout } from '../lib/interfaces'
import { Header, Controller } from '../components'
import { PrimaryButton } from '../components/subcomponents'

const DashboardLayout: React.FC<ILoggedInLayout> = (props) => {
  return (
    <div className='flex-1 flex flex-col bg-dark2 pt-2 pb-2 px-4'>
      <Header />
      <div className='flex-1'>
        {props.children}
      </div>
      <Controller>
        <PrimaryButton text='Create' onClick={() => {return}} />
      </Controller>
    </div>
  )
}

export default DashboardLayout