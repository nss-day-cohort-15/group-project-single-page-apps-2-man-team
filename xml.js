var Chatty = (function(chatty) {
  var data = {}
  // Load JSON data on load and print to messages window
  chatty.loadData = (function() {
    var xml = new XMLHttpRequest();
    xml.addEventListener("load",function(){
      data = JSON.parse(xml.responseText)
      for (i in data) {
        chatty.print(data[i])
      }
    })
    xml.open("GET","messages.json")
    xml.send()
  })()
  // Function to return JSON data
  chatty.getData = function(){
    return data;
  }
  return chatty
})(Chatty || {})
