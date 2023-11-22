type UseMenuHandlerItemType = [
  view: boolean,
  setOnMenu: () => void,
  menuRef: React.RefObject<HTMLDivElement>,
];

export type UseMenuHandlerType = () => UseMenuHandlerItemType;
