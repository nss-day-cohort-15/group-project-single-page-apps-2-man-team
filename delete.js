
var Chatty = (function(chatty){

  // Function to clear the messages window
  function clear() {
    document.querySelector("tbody").innerHTML = `<tr class="danger"><td style="text-align: center;">NO MESSAGES</td></tr>`
  }

  document.querySelector('#clear').addEventListener("click", clear);

  // Function to clear a specific line as specified by the delete button
  chatty.deleter = function(evt) {
      var removeId = evt.path[2].id.slice(4);
      chatty.splicePrivateAry(removeId);
      chatty.print(document.querySelector("tbody"));
    }

  chatty.editer = function(evt) {
    var editID = evt.path[2].id.slice(4);
    evt.path[2].children[0].outerHTML = `<td><input type="text" class="form-control" value="${chatty.getPrivateAry()[editID].userId}"></input></td>`
    if (evt.path[2].children[0].children[0].value === "undefined") {
      evt.path[2].children[0].children[0].value = "GuestUser"
    }
    evt.path[2].children[0].addEventListener("keydown",chatty.commitEdit)
    evt.path[2].children[1].outerHTML = `<td><input type="text" class="form-control" value="${chatty.getPrivateAry()[editID].message}"></input></td>`
    evt.path[2].children[1].addEventListener("keydown",chatty.commitEdit)
  }

  chatty.commitEdit = function(evt) {
    if (event.keyCode === 13) {
      var editID = evt.path[2].id.slice(4);
      var message = evt.path[2].childNodes[3].children[0].value
      var userId = evt.path[2].childNodes[1].children[0].value
      chatty.editPrivateAry(editID,{"message": message,"userId": userId})
      chatty.print(document.querySelector("tbody"));
    }
  }

  return chatty;

})(Chatty || {})
