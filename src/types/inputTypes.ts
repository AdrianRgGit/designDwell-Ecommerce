export interface TextFieldInputProps {
  label: string;
  type: string;
  required?: boolean;
  grow?: boolean;
}

export interface ButtonInputProps {
  text: string;
  type: "submit" | "button" | "reset" | undefined;
  grow?: boolean;
  onClick?: () => void;
}

export interface ButtonProfileInputProps {
  text: string;
  type: "submit" | "button" | "reset" | undefined;
  label?: string;
  first?: boolean;
  onClick?: () => void;
}
