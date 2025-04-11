'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const DynamicHeader = dynamic(() => import('@/components/Header'), { ssr: false });

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <DynamicHeader />
      {children}
    </>
  );
};

export default ClientLayout;
