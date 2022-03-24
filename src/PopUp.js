/* global chrome */

export default function PopUp() {
    

      // The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
 
    document.body.style.backgroundColor = 'green';
    
  }
  
  
  return <button onClick={
()=>{ 
    alert('sucsess')
    

 
    function popup() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "ש"});
       });
    }

    popup()

}
  }
  > ckicj</button> 
  
   
  
  
  
}