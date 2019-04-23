import React, { Component } from "react";

export default class Iframe extends Component {
  render() {
    return (
        <div>
            <iframe title="unique" src="https://vorlesungsplan.dhbw-mannheim.de/index.php?action=list&gid=3067001" />
        </div>
    );
  }
}
