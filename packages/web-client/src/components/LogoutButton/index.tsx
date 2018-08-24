import React from "react";

import Button from "../Button";

const handleClick = () => {
  window.localStorage.clear();
  window.location.reload();
};

export default class LayoutButton extends React.Component {
  public render () {
    return (
      <Button onClick={handleClick}>
        Logout
      </Button>
    );
  }
}
