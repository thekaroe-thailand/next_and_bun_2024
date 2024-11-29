'use client'

import { useRef, useEffect, useState } from 'react';

export default function Page() {
    const refUsername = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        refUsername.current?.focus();
    }, [])

    return (
        <>
            <input ref={refUsername}
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <div>ชื่อของคุณคือ {username}</div>
        </>
    )
}
