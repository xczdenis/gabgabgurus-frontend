import { AuthGuard } from '@/guards/AuthGuard';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}
