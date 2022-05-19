import React from 'react'
import { SideBarListLayout } from '../layout'
import { SubTitle } from './subcomponents'

const ContentSection: React.FC = (props) => {

  const contentList = [
    {
      title: 'Universe',
    },
    {
      title: 'User',
    },
    {
      title: 'SpotifyPlaylist',
    }
  ]

  return (
    <div>
      <SubTitle text="Content" />
      <SideBarListLayout list={contentList}/>
    </div>
  )
}

export default ContentSection