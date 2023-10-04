import React from "react";
import mermaid from "mermaid";
import PropTypes from "prop-types";

mermaid.initialize({
  startOnLoad: true,
  theme: "base",
  securityLevel: "loose"
});

interface MermaidProps {
  chart: string;
}

class Mermaid extends React.Component<MermaidProps> {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}



export default Mermaid;