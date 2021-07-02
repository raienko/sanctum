import React from 'react';
import Router from 'src/navigation/Router';
import StoreProvider from 'src/store/Provider';
import System from 'src/screens/System';

export default function App() {
  return (
    <StoreProvider>
      <Router />
      <System />
    </StoreProvider>
  );
}
