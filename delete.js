
var Chatty = (function(chatty){

  // Function to clear the messages window
  function clear() {
    document.querySelector("tbody").innerHTML = `<tr class="danger"><td style="text-align: center;">NO MESSAGES</td></tr>`
  }

  document.querySelector('#clear').addEventListener("click", clear);

  // Function to clear a specific line as specified by the delete button
  chatty.deleter = function(evt) {
      evt.path[3].removeChild(evt.path[2]);
      //need to dynamically get the spot of the <tr> to remove from array????
      //chatty.privateAry.slice(,1)
    }

  return chatty;

})(Chatty || {})
