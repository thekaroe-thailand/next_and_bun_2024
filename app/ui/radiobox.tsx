'use client'

import { useState } from 'react';

export default function Radiobox() {
    const [gender, setGender] = useState('male');

    const handleChangeGender = (e: any) => {
        setGender(e.target.value);
    }

    return (
        <>
            <input
                type="radio"
                onChange={handleChangeGender}
                value="male"
                checked={gender === 'male'}
                name="gender" />{" "}
            ชาย
            <input
                type="radio"
                onChange={handleChangeGender}
                value="female"
                checked={gender === 'female'}
                name="gender" />{" "}
            หญิง
            <div>สิ่งที่คุณเลือกคือ {gender}</div>
        </>
    );
}
