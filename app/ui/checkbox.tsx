'use client';

import { useState } from 'react';

export default function Checkbox() {
    const [javaChecked, setJavaChecked] = useState(false);
    const [phpChecked, setPhpChecked] = useState(false);
    const [csChecked, setCsChecked] = useState(false);

    const handleJavaChecked = (e: any) => setJavaChecked(e.target.checked);
    const handlePhpChecked = (e: any) => setPhpChecked(e.target.checked);
    const handleCsChecked = (e: any) => setCsChecked(e.target.checked);

    return (
        <>
            <input
                type="checkbox"
                checked={javaChecked}
                onChange={handleJavaChecked} />{" "}JAVA
            <input
                type="checkbox"
                checked={phpChecked}
                onChange={handlePhpChecked} />{" "}PHP
            <input
                type="checkbox"
                checked={csChecked}
                onChange={handleCsChecked} />{" "}C#

            <div>Your Selected Items</div>
            <div>Java Checked {javaChecked.toString()}</div>
            <div>PHP Checked {phpChecked.toString()}</div>
            <div>C# Checked {csChecked.toString()}</div>
        </>
    );
}
