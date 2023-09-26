import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return <Image src="/logo/logo.svg" alt="GabGabGurus.com" width={24} height={24} />;
};

export default Logo;
