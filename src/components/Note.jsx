import React from "react";

function Note() {
  return (
    <div
      className="note"
      style={{
        marginTop: "30px",
        textAlign: "center",
        fontSize: "14px",
        color: "#666",
        clear: "both",
      }}
    >
      <p>
        <strong>Note:</strong> This website is created to demonstrate my React
        skills. For the exact resume, please download it from the Home section.
      </p>
    </div>
  );
}

export default Note;
