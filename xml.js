var Chatty = (function(chatty) {
  var messages = [];
  // Load JSON data on load and print to messages window
  chatty.loadData = (function() {
    var xml = new XMLHttpRequest();
    xml.addEventListener("load",function(){
      var data = JSON.parse(xml.responseText)
      for (i in data) {
        messages.push(data[i])
      }
      chatty.print(messages);
    })
    xml.open("GET","messages.json")
    xml.send()
  })()
  // Function to return messages array
  chatty.getMessages = function(){
    return messages;
  }
  // Function to add a message to the array
  chatty.addMessage = function(newMessage){
    messages.push(newMessage);
    chatty.print(messages)
  }
  return chatty
})(Chatty || {})
