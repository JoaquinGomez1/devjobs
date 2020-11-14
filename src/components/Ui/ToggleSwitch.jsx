import React from "react";
import "../../style/ToggleSwitch.css";

export default function ToggleSwitch({ onClick }) {
  return (
    <label className='switch'>
      <input type='checkbox' onClick={onClick} />
      <span className='slider round'></span>
    </label>
  );
}
