import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes  from './Routes';
import * as Device from 'expo-device';

export const Providers = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
