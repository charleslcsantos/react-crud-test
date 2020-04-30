import React from "react";
import "./Alert.scss";

export const Alert = (props) => {
  return (
    <div
      className={`alert alert-dismissible fade show shadow alert-${props.alert.type}`}
      role="alert"
    >
      {props.alert.message}
      <button
        type="button"
        class="close"
        // onClick={closeAlert()}
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
