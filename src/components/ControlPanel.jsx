import React from "react";
import "./ControlPanel.scss";

class ControlPanel extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { command } = this.props;
    return (
      <a className="border-animation" href="#">
        <button type="button" className="border-animation__inner">
          {command}
        </button>
      </a>
    );
  }
}

export default ControlPanel;
