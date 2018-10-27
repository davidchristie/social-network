import { Button } from "design-system";
import React from "react";

import { AUTHENTICATION_TOKEN } from "../../constants";

const handleClick = () => {
  window.localStorage.removeItem(AUTHENTICATION_TOKEN);
  window.location.reload();
};

export default class LogoutButton extends React.Component {
  public render () {
    return (
      <Button onClick={handleClick}>
        Logout
      </Button>
    );
  }
}
