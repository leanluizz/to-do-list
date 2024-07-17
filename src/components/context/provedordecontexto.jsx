import React, { useState } from 'react';
import ThemeContext from './context';

const Provider = ({ children }) => {
    const [themeColor, setThemeColor] = useState('bg-success');
    const [borderthemeColor, setBorderThemeColor] = useState('border-success');
    const [textColor, setTextColor] = useState('text-success');


    const changecolor = (e) => {
        setTextColor(e)
    };

    return (
        <ThemeContext.Provider value={{ textColor, changecolor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default Provider;
