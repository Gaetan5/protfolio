'use client';
import React from 'react';
import ClientFeatures from './client-features';

interface ClientWrapperProps {
  children: React.ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <>
      {children}
      <ClientFeatures />
    </>
  );
};

export default ClientWrapper;
