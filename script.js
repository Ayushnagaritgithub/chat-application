const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const message = messageInput.value.trim();
  if (message !== '') {
    displayMessage('You', message);
    // Add code here to send the message to the server or other users
    messageInput.value = '';
  }
}

// Example of receiving a message from the server (simulate server response)
function receiveMessage(sender, message) {
  displayMessage(sender, message);
}

// Simulate receiving a message after a delay
setTimeout(() => {
  receiveMessage('Friend', 'Hello, how are you?');
}, 2000);

// After the previous JavaScript code

// Capture Enter key press to send messages
messageInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Disable send button when the input is empty
messageInput.addEventListener('input', function() {
  const message = messageInput.value.trim();
  const sendButton = document.querySelector('.input-box button');
  sendButton.disabled = message === '';
});




 
