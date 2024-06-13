import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IconPicker.css'; // Import custom CSS for styling

const IconPicker = ({
    rowsInOnePage,
    columnsInOnePage,
    iconHeight,
    iconWidth,
    pickerHeight = 500,
    pickerWidth = 500,
    onIconSelect,
    onCancel,
    onDone,
}) => {
    const [icons, setIcons] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        axios
            .get('https://cdn.jsdelivr.net/npm/feather-icons/dist/icons.json')
            .then((response) => setIcons(Object.keys(response.data)))
            .catch((error) => console.error('Error fetching icons:', error));
    }, []);

    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, [icons, currentPage]);

    const iconsPerPage = rowsInOnePage * columnsInOnePage;
    const totalPages = Math.ceil(icons.length / iconsPerPage);
    const startIndex = currentPage * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    const paginatedIcons = icons.slice(startIndex, endIndex);

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    const handleCancel = () => {
        setSelectedIcon(null);
        onCancel();
    };

    const handleDone = () => {
        if (selectedIcon) {
            onIconSelect(selectedIcon);
        }
        onDone();
    };

    return (
        <div
            className="icon-picker-container"
            style={{ width: pickerWidth, height: pickerHeight }}
        >
            <div className="icons-grid">
                {paginatedIcons.map((icon) => (
                    <div
                        key={icon}
                        className={`icon-item ${selectedIcon === icon ? 'selected' : ''}`}
                        onClick={() => handleIconClick(icon)}
                    >
                        <i data-feather={icon}></i>
                    </div>
                ))}
            </div>
            <div className="action-buttons">
                <button className="action-btn cancel-btn" onClick={handleCancel}>
                    Cancel
                </button>
                <button className="action-btn done-btn" onClick={handleDone}>
                    Done
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
                    disabled={endIndex >= icons.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default IconPicker;
