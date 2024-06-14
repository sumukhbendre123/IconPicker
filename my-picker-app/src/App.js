import React, { useState, useEffect } from "react";
import IconPicker from "./components/IconPicker";
import "./App.css";
import feather from "feather-icons";

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [iconPickerOpen, setIconPickerOpen] = useState(false);
  const [iconColor, setIconColor] = useState("#000000");

  useEffect(() => {
    feather.replace();
  }, [selectedIcon]); // Ensure feather icons are updated when selectedIcon changes

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setIconPickerOpen(false);
  };

  const handleColorChange = (e) => {
    setIconColor(e.target.value);
  };

  const handleClearIcon = () => {
    setSelectedIcon(null);
  };

  return (
    <div className="app-container">
      <h1 id="picker">Icon Picker</h1>
      <div
        className="selected-icon-container"
        onClick={() => setIconPickerOpen(true)}
        style={{ color: iconColor }}
      >
        {selectedIcon ? <i data-feather={selectedIcon}></i> : "Select App Icon"}
      </div>
      <input
        type="color"
        value={iconColor}
        onChange={handleColorChange}
        className="color-picker"
      />
      {iconPickerOpen && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={5}
          pickerHeight={500}
          pickerWidth={500}
          handleIconSelect={handleIconSelect}
          handleClearIcon={handleClearIcon}
          setIconPickerOpen={setIconPickerOpen}
        />
      )}
    </div>
  );
};

export default App;


