import React from 'react'
import { ISideBarListItem, ISideBarListLayout } from '../lib/interfaces'

const SideBarListLayout: React.FC<ISideBarListLayout> = (props) => {
  return (
    <div className='flex flex-col gap-1 p-2'>
      {
        props.list && props.list.map((item, index) => {
          return (
            <SideBarListItem key={index} text={item.title} icon={props.icon ? props.icon : null} />
          )
        })
      }
    </div>
  )
}

const SideBarListItem: React.FC<ISideBarListItem> = (props) => {
  return (
    <button
      className='rounded-md 
                py-[2px] cursor-pointer px-3 flex 
                items-center gap-1 hover:bg-darkhalf 
                text-darktext'>
      {props.text}
    </button>
  )
}

export default SideBarListLayout