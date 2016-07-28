
var Chatty = (function(chatty) {
    var data = [];
    var table = document.querySelector("tbody");
    var xhrLength = 0;

    // Load JSON data on load
    chatty.loadData = (function() {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener("load",function(){
        data = JSON.parse(xhr.responseText);
        xhrLength = data.length;
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
    chatty.editPrivateAry = function(index,newObj){
      data.splice(index,1,newObj)
    }
    chatty.emptyPrivateAry = function(){
      data.splice(0)
    }
    chatty.getXhrLength = function(){
      return xhrLength;
    }

    return chatty
})(Chatty || {})
