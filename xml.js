var Chatty = (function(chatty) {
  var data = {}
  chatty.loadData = (function() {
    var xml = new XMLHttpRequest();
    xml.addEventListener("load",function(){
      data = JSON.parse(xml.responseText)
    })
    xml.open("GET","messages.json")
    xml.send()
  })()
  chatty.getData = function(){
    return data;
  }
  return chatty
})(Chatty || {})