import React from 'react'
import { SideBarTitle } from '../components'
import { SelectCustom } from '../components/subcomponents'
import { ISidebarLayout } from '../lib/interfaces'

const SideBarLayout: React.FC<ISidebarLayout> = (props) => {

  const options = [
    { value: 'Spaceverse-project', label: 'Spaceverse' },
    { value: 'Portfolio-project', label: 'Portfolio' },
  ]

  return (
    <div
      className='flex flex-col w-60 pt-2 pb-2 pl-4'
    >
      <SideBarTitle title={props.title} />
      {props.children}
    </div>
  )
}

export default SideBarLayout