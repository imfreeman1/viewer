import { UseMenuHandlerType } from '@/interface/useMenuHandler.interface';
import { useEffect, useRef, useState } from 'react';

const useMenuHandler: UseMenuHandlerType = () => {
  const [view, setView] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const setOnMenu = () => {
    setView((s) => !s);
  };
  const setOffMenu = ({ target }: MouseEvent) => {
    if (!menuRef.current?.contains(target as Node)) setView(false);
  };

  useEffect(() => {
    if (view) {
      document.addEventListener('mousedown', setOffMenu);
    }

    return () => {
      document.removeEventListener('mousedown', setOffMenu);
    };
  }, [view]);

  return [view, setOnMenu, menuRef];
};

export default useMenuHandler;
