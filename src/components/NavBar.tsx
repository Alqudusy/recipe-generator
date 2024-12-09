import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './firebase-config';

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-theme", !isDarkMode);
    };
    const handleLogOut = async () => {
        try {
            await signOut(auth)
        } catch (e: any) {
            console.log(e.message);
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg py-3 ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm`}>
            <div className="container-fluid">
                <h2 className="navbar-brand mb-0 text-primary">Recipe Generator</h2>
                <div className="d-flex align-items-center">
                    <button
                        className="btn btn-outline-secondary me-3"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <button className="btn btn-outline-danger" onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
