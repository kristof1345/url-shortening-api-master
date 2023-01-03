const shortenedLinks = document.getElementById("shortened-links");
const link = document.getElementById("link");
const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  shortenLinks();
  render();
  clearForm();
});

function shortenLinks() {}

function render() {
  let linkBlock = document.createElement("div");
  linkBlock.classList.add("link-block");

  let originalLink = document.createElement("p");
  originalLink.classList.add("original-link");
  originalLink.textContent = link.value;
  linkBlock.appendChild(originalLink);

  let holderDiv = document.createElement("div");
  linkBlock.appendChild(holderDiv);

  let shortenedLink = document.createElement("p");
  shortenedLink.classList.add("shortened-link");
  shortenedLink.textContent = link.value;
  holderDiv.appendChild(shortenedLink);

  let copyButton = document.createElement("button");
  copyButton.classList.add("copy");
  copyButton.textContent = "Copy!";
  holderDiv.appendChild(copyButton);

  shortenedLinks.appendChild(linkBlock);
}

function clearForm() {}
