import React, { useState } from 'react';
import IconPicker from './components/IconPicker';
import './App.css'; // Import custom CSS for styling

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [iconPickerOpen, setIconPickerOpen] = useState(false);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setIconPickerOpen(false);
  };

  return (
    <div className="app-container">
      <h1>Icon Picker</h1>
      <div
        className="selected-icon-container"
        onClick={() => setIconPickerOpen(true)}
      >
        {selectedIcon ? <i data-feather={selectedIcon}></i> : 'Click to pick an icon'}
      </div>
      {iconPickerOpen && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={5}
          iconHeight={50}
          iconWidth={50}
          onIconSelect={handleIconSelect}
        />
      )}
    </div>
  );
};

export default App;

