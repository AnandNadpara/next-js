import * as React from 'react'
import type { AppProps } from 'next/app'
import {Client, Server} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import Nav from '../src/components/navigation';

const getHydrateClass = () =>
  document.getElementsByClassName(
    '_styletron_hydrate_',
  ) as HTMLCollectionOf<HTMLStyleElement>;

const styletron =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
        hydrate: getHydrateClass(),
      });

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '200px',
  // alignItems: 'center',
  height: '100%',
})


function MyApp({ Component, pageProps}: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Nav />
          <Component {...pageProps} />
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default MyApp