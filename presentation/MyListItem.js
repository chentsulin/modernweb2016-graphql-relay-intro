// Import React
import React from "react";

// Import Spectacle Core tags
import {
  ListItem,
  Text
} from "spectacle";

export default class MyListItem extends React.Component {
  render() {
    return (
      <ListItem>
        <Text textColor="white" lineHeight="1.2em">{this.props.children}</Text>
      </ListItem>
    );
  }
}
