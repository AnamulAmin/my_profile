import React from "react";
import "./ToggleMenu.css";
export default function ToggleMenu({ isOpen, setIsOpen }) {
  return (
    <div className="burger z-50 relative">
      <input
        type="checkbox"
        id="burger"
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <span style={{ backgroundColor: isOpen ? "black" : "white" }}></span>
      <span style={{ backgroundColor: isOpen ? "black" : "white" }}></span>
      <span style={{ backgroundColor: isOpen ? "black" : "white" }}></span>
    </div>
  );
}
