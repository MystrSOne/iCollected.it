import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';

import { AppProviders } from './providers';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="dark" />
      <AppProviders />
    </Fragment>
  );
}
