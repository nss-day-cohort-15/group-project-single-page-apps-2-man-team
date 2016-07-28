var Chatty = (function(chatty) {
  var privateAry = [];


  //function to print to DOM and add to privateAry
  chatty.print = function(id) {

      var msgAry = chatty.getPrivateAry();

      var noMessages = document.querySelector('tr.danger');

      if(noMessages){
         id.removeChild(document.querySelector('tr.danger'));
      }

      id.innerHTML = "";

      msgAry.forEach(function(obj, index){
        id.innerHTML += `
          <tr id="msg-${index}">
              <td>${obj.userId ? obj.userId : 'GuestUser'}:</td>
              <td>${obj.message}</td>
              <td><button type="button" class="btn btn-xs btn-warning">Edit</button></td>
              <td><button type="button" class="btn btn-xs btn-danger">Delete</button></td>
          </tr>
          `;
      })

      document.querySelectorAll('.btn-danger').forEach(e => e.addEventListener("click", chatty.deleter));
      document.querySelectorAll('.btn-warning').forEach(e => e.addEventListener("click", chatty.editer));

      }

  // Function to add user input to the DOM on an enter key event
  adder = function(){
    var message = document.querySelector("#chat-input").value;
    var name = document.querySelector("#chat-name").value;
    var obj = {'userId': name, 'message' : message};


    if (event.keyCode === 13) {
      chatty.pushPrivateAry(obj);
      chatty.print(document.querySelector('tbody'));
      document.querySelector("#chat-input").value = "";
    }
  }

  document.querySelector('#chat-name').addEventListener('keydown', adder);
  document.querySelector('#chat-input').addEventListener('keydown', adder);

  return chatty
})(Chatty || {})
