'use client';

import { Toaster } from 'sonner';

export default function ClientToaster() {
  return <Toaster position="top-right" className="bg-accent text-primary" />;
}