// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable no-console */

chrome.storage.local.set({ key: 1 })

chrome.runtime.onMessage.addListener(() => {
  chrome.storage.local.get("key", (response) => {
    chrome.storage.local.set({ key: response.key + 1 }, () => {
      chrome.storage.local.get("key", ({ key }) => {
        console.log(`Current value ${key}`)
        chrome.declarativeNetRequest.updateDynamicRules(
          {
            addRules: [
              {
                id: 1,
                priority: 1,
                action: {
                  type: "modifyHeaders",
                  requestHeaders: [
                    {
                      header: "Example-Header",
                      operation: "set",
                      value: `Current value ${key}`,
                    },
                  ],
                },
                condition: {
                  urlFilter: "*",
                  resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest"],
                },
              },
            ],
            removeRuleIds: [1],
          },
          () => {
            if (chrome.runtime.lastError) {
              console.error("Updating kiosk headers failed", {
                error: chrome.runtime.lastError,
              })
            }
          }
        )
      })
    })
  })
})
