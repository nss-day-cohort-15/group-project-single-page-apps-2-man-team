
var Chatty = (function(chatty){

  // Function to clear the messages window
  function clear() {
    document.querySelector("tbody").innerHTML = `<tr class="danger"><td style="text-align: center;">NO MESSAGES</td></tr>`
  }

  document.querySelector('#clear').addEventListener("click", clear);

  // Function to clear a specific line as specified by the delete button
  chatty.deleter = function(evt) {
      evt.path[3].removeChild(evt.path[2]);

      var removeId = evt.path[2].id.slice(4);
      chatty.splicePrivateAry(removeId);

      chatty.print(document.querySelector("tbody"));
    }

  return chatty;

})(Chatty || {})
