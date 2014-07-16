function handleMessage(msgEvent) {
    var messageName = msgEvent.name;
    if (messageName === "getCurrentSelection") {
      // check if we have the top frame
      if (self === top)
      {
        safari.self.tab.dispatchMessage("updateSelection", window.getSelection().toString());
      }
    }
}

safari.self.addEventListener("message", handleMessage, false);

//document.addEventListener('mouseup', slectionHandler, false);
//document.addEventListener('keyup', slectionHandler, false);