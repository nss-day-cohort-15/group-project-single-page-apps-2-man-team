var Chatty = (function(chatty){
  var output = document.querySelector(".chat-window")
  chatty.print = function(text) {
    output.innerHTML += `
      <div>
        ${text} <button class="delete">Delete<button>
      </div>
      `
  }
  return chatty
})(Chatty || {})
