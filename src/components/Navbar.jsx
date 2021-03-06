import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default class ChangeAnimation extends React.Component {
  render() {
    const { tab, changeTab } = this.props;
    return (
      <div className="App">
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          value={tab}
          onChange={changeTab}
          centered
        >
          <Tab label="Courses" />
          <Tab label="Weather" />
          <Tab label="Places Of Interest" />
        </Tabs>
      </div>
    );
  }
}
