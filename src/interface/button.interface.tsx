export interface ButtonComponentType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactChild;
  onClick?: React.MouseEventHandler;
}
