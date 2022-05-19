import React from 'react'
import Head from 'next/head'
import { AppData } from '../data'

const headMeta : React.FC = () => {
  return (
    <Head>
        <title>{AppData.name}</title>
    </Head>
  )
}

export default headMeta