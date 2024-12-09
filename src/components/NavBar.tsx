import { useState } from 'react';

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-theme", !isDarkMode);
    };

    return (
        <nav className={`navbar navbar-expand-lg py-3 ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm`}>
            <div className="container-fluid">
                <h2 className="navbar-brand mb-0 text-primary">Recipe Generator</h2>
                <div className="d-flex align-items-center">
                    {/* Theme toggle button */}
                    <button
                        className="btn btn-outline-secondary me-3"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    {/* Log Out Button */}
                    <button className="btn btn-outline-danger">Log Out</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
