import React from 'react'
import { 
  ContentSection,
  HeadMeta,
} from '../../components'
import {
  DashboardLayout,
  SideBarLayout
} from '../../layout'

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
        <HeadMeta />
        <SideBarLayout 
            title=''
        >
          <ContentSection />
        </SideBarLayout>
        <DashboardLayout>
          
        </DashboardLayout>
    </React.Fragment>
  )
}

export default Dashboard