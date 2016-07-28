var Chatty = (function(chatty) {
  var output = document.querySelector(".chat-window")
  // Print a provided argument to the bottom of the messages window with a delete button
  chatty.print = function(messages) {
    chatty.clear();
    messages.forEach(function(i) {
      output.innerHTML += `
        <div>
          ${i} <button type="button" class="btn btn-xs btn-danger">Delete</button>
        </div>
        `
      })
  }
  // Function to clear the messages window
  chatty.clear = function() {
    output.innerHTML = "";
    document.getElementById("clear").disabled = true;
  }
  clear.addEventListener("click",chatty.clear)
  // Function to clear a specific line as specified by the delete button
  chatty.deleter = function() {
    var e = event.target
    var messages = chatty.getMessages()
    for (i in messages) {
      if (messages[i] == e.previousSibling.textContent) {
        console.log(i)
      }
    }
    console.dir(e.previousSibling.textContent)
    for (i in e.classList) {
      if (e.classList[i] == "btn-danger") {
        e.parentElement.parentElement.removeChild(e.parentElement)
      }
    }
  }
  document.addEventListener("click",chatty.deleter)
  // Function to add user input to the DOM on an enter key event
  chatty.adder = function(){
    if (event.keyCode === 13) {
      chatty.addMessage(document.querySelector(".form-control").value);
      document.querySelector(".form-control").value = "";
    }
  }
  document.querySelector(".form-control").addEventListener("keydown",chatty.adder)

  return chatty
})(Chatty || {})
