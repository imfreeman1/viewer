import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const useNavigate = () => {
  const [navView, setNavView] = useState<boolean>(false);
  const pathname = usePathname();

  const viewHandler = useCallback(() => {
    if (pathname.includes('/gallery')) setNavView(true);
    else setNavView(false);
  }, [pathname]);

  useEffect(() => {
    viewHandler();
  });

  return [navView];
};

export default useNavigate;
