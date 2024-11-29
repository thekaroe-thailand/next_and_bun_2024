'use client';

import { useState } from 'react';

export default function ClientComponent() {
    const [items] = useState(['java', 'php', 'C++']);

    return (
        <div>
            {items.map((item: string, index: number) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}