
var Chatty = (function(chatty) {
    var data = [];
    var table = document.querySelector("tbody");

    // Load JSON data on load
    chatty.loadData = (function() {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener("load",function(){
        data = JSON.parse(xhr.responseText);
        chatty.print(table);
      })

      xhr.open("GET","messages.json")
      xhr.send()
    })()

    chatty.getPrivateAry = function(){
      return data;
    }

    chatty.pushPrivateAry = function(obj){
      data.push(obj);
    }

    chatty.splicePrivateAry = function(index){
      data.splice(index, 1);
    }

    return chatty
})(Chatty || {})
