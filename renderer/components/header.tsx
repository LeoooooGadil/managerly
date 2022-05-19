import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { BsGearFill } from 'react-icons/bs'
import { MdArrowBack } from 'react-icons/md'

import {
  IconButton,
  SelectCustom
} from './subcomponents'

const Header: React.FC = () => {
  const router = useRouter()

  const [OnSettings, setOnSettings] = React.useState(false)

  const goback = () => {
    router.back()
  }

  useEffect(() => {
    if (router.pathname === '/settings') return setOnSettings(true)
    setOnSettings(false)
  }, [router])

  // // fixes a bug where a hydration error occurs when is ran in the electron environment
  // // this is a workaround for the bug
  // // because the server value is dark but the client value is light
  // useEffect(() => {
  //     setTheme('light')
  // }, [])

  const options = [
    { value: 'Spaceverse-project', label: 'Spaceverse' },
    { value: 'Portfolio-project', label: 'Portfolio' },
  ]

  if(OnSettings) {
    return (
      <div
      className='flex justify-end items-center h-9'
    >
      <div>
        <IconButton
          onClick={() => goback()}
          icon={MdArrowBack}
          size={20}
        />
      </div>
    </div>
    )
  }

  return (
    <div
      className='flex justify-between items-center h-9'
    >
      <div>
        <SelectCustom
          options={options}
          placeholder='Select Project...'
        />
      </div>
      <div>
        <IconButton
          href="/settings"
          icon={BsGearFill}
          size={20}
        />
      </div>

    </div>
  )
}

export default Header