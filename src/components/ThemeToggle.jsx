// import React, { useState, useEffect } from 'react';

// const ThemeToggle = () => {
//     const [isDarkMode, setIsDarkMode] = useState(
//         localStorage.getItem('theme') === 'dark' || false
//     );

//     useEffect(() => {
//         if (isDarkMode) {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('theme', 'light');
//         }
//     }, [isDarkMode]);

//     return (
//         <button 
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="  text-white rounded"
//         >
//             {isDarkMode ? '☀️ ' : '🌙 '}
//         </button>
//     );
// };

// export default ThemeToggle;
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('dark'); // Default theme is dark

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-primary text-white rounded"
        >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default ThemeToggle;

