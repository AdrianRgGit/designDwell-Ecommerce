export interface TextFieldInputProps {
  label: string;
  type: string;
  required?: boolean;
  grow?: boolean;
}

export interface ButtonInputProps {
  text: string;
  type: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}
