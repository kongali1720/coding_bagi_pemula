console.log("Background script berjalan!");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getTime") {
    sendResponse({ time: new Date().toLocaleTimeString() });
  }
});
