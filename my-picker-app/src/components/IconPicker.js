import React, { useState, useEffect } from "react";
import axios from "axios";
import feather from "feather-icons";
import "./IconPicker.css";

const IconPicker = ({
    rowsInOnePage,
    columnsInOnePage,
    pickerHeight = 500,
    pickerWidth = 500,
    handleIconSelect,
    handleClearIcon,
    setIconPickerOpen,
}) => {
    const [icons, setIcons] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(null); // State to store selected icon

    useEffect(() => {
        axios
            .get("https://cdn.jsdelivr.net/npm/feather-icons/dist/icons.json")
            .then((response) => setIcons(Object.keys(response.data)))
            .catch((error) => console.error("Error fetching icons:", error));
    }, []);

    useEffect(() => {
        feather.replace();
    }, [icons, currentPage, searchTerm, selectedIcon]); // Ensure feather icons are updated when icons change

    const iconsPerPage = rowsInOnePage * columnsInOnePage;
    const filteredIcons = icons.filter((icon) =>
        icon.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(filteredIcons.length / iconsPerPage);
    const startIndex = currentPage * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    const paginatedIcons = filteredIcons.slice(startIndex, endIndex);

    const handleDone = () => {
        handleIconSelect(selectedIcon); // Pass selected icon to parent component
        setIconPickerOpen(false);
    };

    const handleCancel = () => {
        setSelectedIcon(null); // Reset the selected icon
        handleClearIcon(); // Call the clear icon handler if needed
        setIconPickerOpen(false); // Close the picker
        window.location.reload(); // Refresh the page
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(0);
    };

    const handleIconClick = (icon) => {
        setSelectedIcon(icon); // Set the selected icon when clicked
    };

    return (
        <div className="icon-picker-container" style={{ width: pickerWidth, height: pickerHeight }}>

            <div className="icons-grid">
                {paginatedIcons.map((icon) => (
                    <div
                        key={icon}
                        className={`icon-item ${selectedIcon === icon ? "selected" : ""}`}
                        onClick={() => handleIconClick(icon)}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleIconClick(icon);
                            }
                        }}
                    >
                        <i data-feather={icon}></i>
                    </div>
                ))}
            </div>
            <div className="action-buttons">
                <button className="action-btn done-btn" onClick={handleDone}>
                    Done
                </button>
                <button className="action-btn cancel-btn" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
            <div className="pagination">
                <button
                    className="page-btn"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <span className="page-number">
                    Page {currentPage + 1} of {totalPages}
                </span>
                <button
                    className="page-btn"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= filteredIcons.length}
                >
                    Next
                </button>
            </div>
            {selectedIcon && (
                <div className="selected-icon-display">
                    Selected Icon:
                    <i data-feather={selectedIcon}></i>
                </div>
            )}
        </div>
    );
};

export default IconPicker;

