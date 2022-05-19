import React from 'react'
import { ISidebarTitle } from '../lib/interfaces'
import { MainTitle } from './subcomponents'

const SideBarTitle: React.FC<ISidebarTitle> = (props) => {
  return (
    <div className='w-full flex items-center h-9'>
      <MainTitle text={props.title} />
    </div>
  )
}

export default SideBarTitle