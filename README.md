<!DOCTYPE html>
<html>
<head>
  <title>Real-time Chat Application</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="chat-box" id="chat-box"></div>
  <div class="input-box">
    <input type="text" id="message-input" placeholder="Type your message...">
    <button onclick="sendMessage()">Send</button>
  </div>
  <script src="/socket.io/socket.io.js"></script>
  <script src="script.js"></script>
</body>
</html>

