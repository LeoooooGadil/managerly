import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css';
import { createAppDirectory } from '../utils/filesystem'
import { useRouter } from 'next/router';

createAppDirectory()

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [user, setUser] = React.useState<any>({
    name: 'leo'
  })

  useEffect(() => {
    if(!user.name) return;
    router.push('/dashboard')
  }, [])

  return (
    <ThemeProvider attribute='class'>
      <div className='w-screen h-screen flex'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp
