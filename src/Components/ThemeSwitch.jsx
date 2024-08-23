import React, { useState } from 'react';
import '../static/ThemeSwitch.css'; // Assuming you have a separate CSS file for styling

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <label htmlFor="theme" className={`theme ${isDark ? 'dark' : ''}`}>
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          checked={isDark}
          onChange={handleToggle}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="theme__icon-part"></span>
          ))}
        </span>
      </span>
    </label>
  );
};

export default ThemeToggle;
