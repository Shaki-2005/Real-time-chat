const socket = io();

socket.on('message', function(msg) {
    const messages = document.getElementById('messages');
    const messageItem = document.createElement('div');
    messageItem.textContent = msg;
    messages.appendChild(messageItem);
    messages.scrollTop = messages.scrollHeight;
});

function sendMessage() {
    const input = document.getElementById('message');
    const msg = input.value;
    if (msg.trim() !== "") {
        socket.send(msg);
        input.value = "";
    }
}
