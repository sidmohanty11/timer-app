const inputEl = document.getElementById("name_input");
const btnEl = document.getElementById("save_btn");

btnEl.addEventListener("click", () => {
  const name = inputEl.value;
  chrome.storage.sync.set(
    {
      name,
    },
    () => {
      console.log("name is set");
    }
  );
});

chrome.storage.sync.get(["name"], (res) => {
  console.log(res);
});
