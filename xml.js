var xml = new XMLHttpRequest();
xml.addEventListener("load",function(){
  console.dir(xml)
})
xml.open("GET","messages.json")
xml.send()
