function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = userInput.value.trim();

  if (userMessage) {
    // Display user's message
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);

    // Generate bot response
    const botResponse = getBotResponse(userMessage);
    const botMessageElement = document.createElement("div");
    botMessageElement.className = "message bot-message";
    botMessageElement.textContent = botResponse;
    chatBox.appendChild(botMessageElement);

    // Clear input field
    userInput.value = "";

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function getBotResponse(message) {
  const botResponses = {
    hello: "Hi there! How can I help you today?",
    "how are you": "I'm doing well, thank you for asking!",
    "what's your name": "My name is ChatBot. It's nice to meet you!",
    bye: "Goodbye! Have a great day!",
    default:
      "I'm not sure how to respond to that. Can you try asking something else?",
  };

  const lowerCaseMessage = message.toLowerCase();
  for (const key in botResponses) {
    if (lowerCaseMessage.includes(key)) {
      return botResponses[key];
    }
  }
  return botResponses["default"];
}
