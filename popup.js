const psl = window.psl;

function hello() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tabId = tabs[0].id;
    let tabUrl = tabs[0].url;
    const parsedUrl = psl.parse(tabUrl);
    console.log({ tabs, domain: parsedUrl.domain });
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["toggleUrl.js"],
    });
  });
}

document.getElementById("activate-btn").addEventListener("click", hello);
