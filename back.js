chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if(changeInfo.status === "complete") {
        if(tab.url.startsWith("https://lycees.netocentre.fr/")) {
            document.querySelector("portalCASLoginLink").click();
            
            //chrome.tabs.update(tabId, {url: "https://netocentre.fr/"});
        }
        else if(tab.url.includes("netocentre.fr")) {
            
        }
    }

})