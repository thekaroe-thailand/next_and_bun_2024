'use client'

import axios from 'axios'

export default function Page() {
    // GET, POST, PUT, DELETE
    const doPost = async () => {  // CREATE
        const payload = {
            id: 100,
            name: 'kob'
        }
        await axios.post('http://localhost:3000', payload)
    }

    const doGet = async () => {  // READ
        await axios.get('http://localhost:3000')
    }

    const doPut = async () => {  // UPDATE
        const payload = {
            id: 100,
            name: 'kob'
        }
        await axios.put('http://localhost:3000/1', payload)
    }

    const doDelete = async () => {  // DELETE
        await axios.delete('http://localhost:3000/1')
    }

    return (
        <div>
            <h1>Call API : CRUD</h1>
            <button onClick={doPost}>POST</button>
            <button onClick={doGet}>GET</button>
            <button onClick={doPut}>PUT</button>
            <button onClick={doDelete}>DELETE</button>
        </div>
    )
}
