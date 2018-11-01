import FormControl from "@material-ui/core/FormControl";
import MaterialInput from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";

interface Props {
  autoFocus?: boolean;
  className?: string;
  id: string;
  label: string;
  name: string;
  onBlur?: (event: React.FocusEvent) => void;
  onChange?: (event: React.FormEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  required?: boolean;
  type?: string;
  value?: number | string;
}

const Input: React.SFC<Props> = ({
  id,
  label,
  name,
  required,
  ...attributes
}) => {
  return (
    <FormControl fullWidth margin="normal" required={required}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <MaterialInput
        autoComplete={name}
        id={id}
        name={name}
        {...attributes}
      />
    </FormControl>
  );
};

export default Input;
