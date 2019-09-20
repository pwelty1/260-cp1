
async function loadData() {
  const data = await fetch("data.json").then(res => res.json());

  const mason = document.querySelector(".masonry");

  mason.innerHTML = data
    .map(({ file }) => {
      return `<img class="item" src="images/${file}">`;
    })
  .join("");
}

document.body.onload = async () => {
  loadData();
};