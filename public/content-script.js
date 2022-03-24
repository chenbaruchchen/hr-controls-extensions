chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "start" ) {
       start();
           }
           else{
            console.log(request.message)
           }
    }
  );

  function start(){
      alert("started");
  }