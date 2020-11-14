import React from "react";
import "../../style/Loader.css";

export default function LoadingComponent() {
  return (
    <div className='loader-container'>
      <div className='loader-item'></div>
      <div className='loader-item'></div>
      <div className='loader-item'></div>
      <div className='loader-item'></div>
      <div className='loader-item'></div>
    </div>
  );
}
