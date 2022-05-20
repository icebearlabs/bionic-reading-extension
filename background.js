chrome.tabs.onActivated.addListener((tab) => {
  if (changeInfo && changeInfo.status == "complete") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});

chrome.tabs.onCreated.addListener((tab) => {
  if (changeInfo && changeInfo.status == "complete") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});

chrome.tabs.onUpdated.addListener((tab) => {
  if (changeInfo && changeInfo.status == "complete") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});
