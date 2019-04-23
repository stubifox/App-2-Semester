import React, { Component } from "react";
import Iframe from './Iframe.jsx'

export default class RenderComponent extends Component {
    render() {
        const { tab } = this.props;

    switch (tab) {
      case 0:
        return <Iframe/>;
      case 1:
        return <div />;
      case 2:
        return <div />;
      default:
        return undefined;
    }
  }
}
