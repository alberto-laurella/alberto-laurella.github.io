import React, { useState } from 'react';
import './FilterMenuToggle.css'; // Import the CSS for styling

const FilterMenuToggle = ({ onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen);
    };

    return (
        <div className="filter-menu-toggle" onClick={handleClick}>
            {/* Customize the icon or content here */}
            <div className={`icon ${isOpen ? 'open' : ''}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default FilterMenuToggle;