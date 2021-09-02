// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable no-console */

let i = 0

chrome.runtime.onMessage.addListener(() => {
  i += 1

  console.log(`Current value ${i}`)

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
                value: `Current value ${i}`,
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
