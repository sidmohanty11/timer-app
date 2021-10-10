const timeEl = document.getElementById("time");
const nameEl = document.getElementById("name");
const currentTime = new Date().toLocaleTimeString();

timeEl.textContent = `The time is: ${currentTime}`;

// badge text
chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("badge text");
  }
);

chrome.storage.sync.get(["name"], (res) => {
  nameEl.textContent = `Hello, ${res.name}`;
});
