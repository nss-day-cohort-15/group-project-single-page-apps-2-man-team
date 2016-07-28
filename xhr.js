
var Chatty = (function(chatty) {
    var data = {};
    var table = document.querySelector("tbody");

    // Load JSON data on load
    chatty.loadData = (function() {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener("load",function(){
        data = JSON.parse(xhr.responseText);
        data.forEach(obj => chatty.print(table, obj));
      })
      xhr.open("GET","messages.json")
      xhr.send()
    })()

    // Function to return JSON data
    chatty.getData = function(){
      return data;
    }

    return chatty
})(Chatty || {})
