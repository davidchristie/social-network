import MaterialInput from "@material-ui/core/Input";
import React from "react";

interface Props {
  className?: string;
  onBlur?: (event: React.FocusEvent) => void;
  onChange?: (event: React.FormEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
}

const Input: React.SFC<Props> = props => (
  <MaterialInput {...props} />
);

export default Input;
