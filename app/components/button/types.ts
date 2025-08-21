export interface ButtonProps {
  onClick?: () => void;
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  leftSection?: React.ReactNode;
}
