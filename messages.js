var Chatty = (function(chatty) {
  var privateAry = [];


  //function to print to DOM and add to privateAry
  chatty.print = function(id, message, userId) {
      var noMessages = document.querySelector('tr.danger');

      if(noMessages){
         id.removeChild(document.querySelector('tr.danger'));
      }

      id.innerHTML += `
        <tr>
            <td>${userId ? userId : 'GuestUser'}:</td>
            <td>${message}</td>
            <td><button type="button" class="btn btn-xs btn-danger">Delete</button></td>
        </tr>
        `;

      privateAry.push({'userId': userId, 'message' : message});

      document.querySelectorAll('.btn-danger').forEach(e => e.addEventListener("click", chatty.deleter));
  }

  chatty.messageAry = function(){
    return privateAry;
  }

  // Function to add user input to the DOM on an enter key event
  adder = function(){
    var message = document.querySelector("#chat-input").value;
    var name = document.querySelector("#chat-name").value;

    if (event.keyCode === 13) {
      chatty.print(document.querySelector('tbody'), message, name);
      document.querySelector("#chat-input").value = "";
    }
  }

  document.querySelector('#chat-name').addEventListener('keydown', adder);
  document.querySelector('#chat-input').addEventListener('keydown', adder);

  return chatty
})(Chatty || {})
