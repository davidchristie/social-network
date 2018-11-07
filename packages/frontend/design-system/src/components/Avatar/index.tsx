import MaterialAvatar from "@material-ui/core/Avatar";
import withStyles, {
  WithStyles
} from "@material-ui/core/styles/withStyles";
import React from "react";

import Icon from "../Icon";

interface Props {
  children?: React.ReactNode;
  image?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  size?: Size;
}

const sizes = {
  large: {
    height: 60,
    width: 60,
  },
  small: {},
};

const styles = {
  ...sizes,
};

type Size = keyof typeof sizes;

const Content: React.SFC<Props & WithStyles<"large"> & WithStyles<"small">> = ({
  children,
  classes,
  image,
  size = "small",
  ...attributes
}) => {
  return (
    <MaterialAvatar
      className={classes[size]}
      src={image}
      {...attributes}
    >
      {children}
      {!children && !image && (
        <Icon size={size}>
          account_circle
        </Icon>
      )}
    </MaterialAvatar>
  );
};

const Styled = withStyles(styles)(Content);

const Avatar: React.SFC<Props> = props => <Styled {...props} />;

export default Avatar;
