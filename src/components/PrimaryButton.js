import React from "react";
import "./PrimaryButton.css"
export default function PrimaryButton(props) {
  return (
    <div className="primary-button">
      <button onClick={props.onClick}>{props.icon}{props.type}</button>
    </div>
  );
}
