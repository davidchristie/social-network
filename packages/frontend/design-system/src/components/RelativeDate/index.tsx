import { distanceInWordsToNow } from "date-fns";
import React from "react";

interface Props {
  value: string;
}

export default class RelativeDate extends React.Component<Props> {
  public render () {
    const date = new Date(this.props.value);
    return distanceInWordsToNow(date);
  }
}
