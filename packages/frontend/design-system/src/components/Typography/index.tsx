import MaterialTypography, {
  TypographyProps
} from "@material-ui/core/Typography";
import { StatelessComponent } from "enzyme";
import React from "react";

const Typography: StatelessComponent<TypographyProps> = props => {
  return <MaterialTypography {...props} />;
};

export default Typography;
