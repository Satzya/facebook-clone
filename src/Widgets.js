import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
        <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:6706245264979607552"
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
