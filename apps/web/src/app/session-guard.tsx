'use client';

import { useSession } from '@/shared/hooks/useSession';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function SessionGuard({ children }: { children: React.ReactNode }) {
  const { role, loading } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (role) {
        if (pathname === '/login') {
          if (role === 'doctor') {
            router.push('/doctor');
          } else if (role === 'clerk') {
            router.push('/clerk');
          }
        }
      } else if (pathname !== '/login') {
        router.push('/login');
      }
    }
  }, [role, loading, pathname, router]);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  return <>{children}</>;
}
