import TextField from "@material-ui/core/TextField";
import React from "react";

interface Props {
  autoFocus?: boolean;
  className?: string;
  id: string;
  label: string;
  name: string;
  onBlur?: React.FocusEventHandler;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick?: React.MouseEventHandler;
  required?: boolean;
  type?: string;
  value?: number | string;
}

const TextArea: React.StatelessComponent<Props> = ({
  id,
  label,
  name,
  required,
  ...attributes
}) => {
  return (
    <TextField
      autoComplete={name}
      id={id}
      fullWidth={true}
      margin="normal"
      multiline={true}
      name={name}
      {...attributes}
    />
  );
};

export default TextArea;
