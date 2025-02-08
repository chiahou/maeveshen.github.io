import React, { useEffect, useState } from "react";
import rocket from "./rocket.svg";
import "./styles.css";

export default function app() {
  const StatusButton = () => {
    // Function to handle button click and change the status
    const handleButtonClick = () => {
      setStatus((prevStatus) =>
        prevStatus === "LoggedOut" ? "LoggedIn" : "LoggedOut"
      );
    };

    return (
      <div className="info">
        <p>Status: {status}</p>
        <p>Click "log in" to see transition</p>
        {/* Button to change the status */}
        <button onClick={handleButtonClick}>
          {status === "LoggedOut" ? "Log in" : "Log out"}
        </button>
      </div>
    );
  };
  // State to hold the status of the button
  const [status, setStatus] = useState("LoggedOut");
  return (
    <div>
      <StatusButton />
      <div
        className={status === "LoggedOut" ? "inactiveWrapper" : "activeWrapper"}
      >
        <div
          className="rocket-container"
          style={{ display: status === "LoggedOut" ? "none" : "contents" }}
        >
          <img src={rocket} alt="rocekt" />
        </div>
        <div
          className="text-area"
          style={{ display: status === "LoggedOut" ? "none" : "contents" }}
        >
          <div className="title">{"Hold Tight"}</div>
          <div className="content">{"We're shipping you to the MTS"}</div>
        </div>
      </div>
    </div>
  );
}
