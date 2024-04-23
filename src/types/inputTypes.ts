import { ChangeEvent } from "react";

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

export interface SelectInputProps {
  label: string;
  // NOTE: Esto tendré que cambiarlo cuando sepa exactamente que objeto le voy a pasar
  values: any[];
  onClick?: () => void;
}

export interface ProductAmountInputProps {
  amount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

