import { Roboto } from 'next/font/google'
// import "@/styles/globals.css";
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}
