import io from 'socket.io-client';

const Menu = () => {
    var socket = io();
    var messages = document.getElementById('messages');
    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });

    return (
        <section>
            <h1>hello!!!!!!!!!!</h1>
            <ul id="messages"></ul>
            <form id="form" action="">
                <input id="input" autocomplete="off" /><button>Send</button>
            </form>


        </section>
    )
}


export default Menu;