import io from 'socket.io-client';
import { useState, useEffect } from 'react'

import MenuCard from '../Components/MenuCard/';

const socket = io.connect("http://localhost:3001");

const Menu = () => {
    const [message, setMessage] = useState('');
    const [messageReceived, setMessageReceived] = useState('');

    const sendMessage = () => {
        socket.emit('send_message', { message });
    }

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setMessageReceived(data.message);
        });
    }, [socket]);

    return (
        <section>
            <div>
                <input
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
                <button onClick={sendMessage}>Send Message</button>
                <h1>{messageReceived}</h1>
            </div>


            <MenuCard />
        </section>
    )
}


export default Menu;