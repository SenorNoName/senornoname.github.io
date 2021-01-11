const Html5WebSocket = require('html5-websocket');
const ReconnectingWebSocket = require('reconnecting-websocket');

let ws_host = 'bigfloppa.net/chat';
let ws_port = '9600';
const options = { WebSocket: Html5WebSocket };
const rws = new ReconnectingWebSocket('wss://' + ws_host + ':' + ws_port + '/ws', undefined, options);
rws.timeout = 1000;

// on open
rws.addEventListener('open', () => {
  MessageAdd('<div class="message green">You have entered the chat room.</div>');
});

// on close
rws.addEventListener('close', () => {
  MessageAdd('<div class="message blue">You have been disconnected.</div>');
});

// on error
rws.onerror = (err) => {
  MessageAdd('<div class="message red">Connection to chat failed.</div>');
  if (err.code == 'EHOSTDOWN') {
        console.log('[Client] Error: server down.');
  }
};

rws.addEventListener('message', (e) => {
  var data = JSON.parse(event.data);

  if (data.type == "message") {
    MessageAdd('<div class="message">' + data.username + ': ' + data.message + '</div>');
  }
});

document.getElementById("chat-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var message_element = document.getElementsByTagName("input")[0];
  var message = message_element.value;

  if (message.toString().length) {
    var data = {
      type: "message",
      username: "You",
      message: message
    };

    websocket.send(JSON.stringify(data));
    message_element.value = "";
  }
}, false);

function MessageAdd(message) {
  var chat_messages = document.getElementById("chat-messages");

  chat_messages.insertAdjacentHTML("beforeend", message);
  chat_messages.scrollTop = chat_messages.scrollHeight;
}
