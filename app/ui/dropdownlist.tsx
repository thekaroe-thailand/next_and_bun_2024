'use client'

import { useState } from 'react';

export default function Dropdownlist() {
    const [foodList, setFoodList] = useState([
        { name: 'apple' },
        { name: 'mango' },
        { name: 'banana' },
        { name: 'coconut' }
    ]);
    const [food, setFood] = useState('apple');

    return (
        <>
            <select onChange={e => setFood(e.target.value)}>
                {foodList.map((item) => (
                    <option value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <div>สิ่งที่คุณเลือกคือ {food}</div>
        </>
    );
}
