var Chatty = (function(chatty){
  var output = document.querySelector(".chat-window")
  // Print a provided argument to the bottom of the messages window with a delete button
  chatty.print = function(text) {
    output.innerHTML += `
      <div>
        ${text} <button type="button" class="btn btn-xs btn-danger">Delete</button>
      </div>
      `
  }
  // Function to clear the messages window
  chatty.clear = function() {
    output.innerHTML = ""
  }
  clear.addEventListener("click",chatty.clear)
  // Function to clear a specific line as specified by the delete button

  document.addEventListener("click",chatty.eventCheck)
  return chatty
})(Chatty || {})
