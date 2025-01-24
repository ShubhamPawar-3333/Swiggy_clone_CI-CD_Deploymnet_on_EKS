import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './LocationSelector.css'; // Import the location selector styles

const LocationSelector = () => {
    
    const [location, setLocation] = useState('Shivaji Nagar, Pune');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = (isOpen) => {
        setIsDropdownOpen(isOpen);
    };

    return (
        <Dropdown
            show={isDropdownOpen}
            onToggle={toggleDropdown}
        >
            <Dropdown.Toggle variant="link" id="location-dropdown" className="location-dropdown">
                <span className="fw-bold text-orange">{location}</span> {/* Orange text */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLocationChange('Shivaji Nagar, Pune')}>Shivaji Nagar, Pune</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Kothrud, Pune')}>Kothrud, Pune</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Hinjawadi, Pune')}>Hinjawadi, Pune</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Viman Nagar, Pune')}>Viman Nagar, Pune</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Wakad, Pune')}>Wakad, Pune</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Baner, Pune')}>Baner, Pune</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Koregaon Park, Pune')}>Koregaon Park, Pune</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Magarpatta City, Pune')}>Magarpatta City, Punei</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLocationChange('Kalyani Nagar, Pune')}>Kalyani Nagar, Pune</Dropdown.Item>
                {/* Add more locations as needed */}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LocationSelector;
