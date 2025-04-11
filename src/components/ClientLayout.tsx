'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import {Header} from '@/components/Header';

// const DynamicHeader = dynamic(() => import('@/components/Header'), { ssr: false });
// Replace dynamic import with direct import

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ClientLayout;
