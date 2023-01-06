const hamburger = document.getElementById("hamburger");
const mobileNav = document.querySelector(".flex");
const shortenedLinks = document.getElementById("shortened-links");
const link = document.getElementById("link");
const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const url = link.value;
  shortenLinks(url);
});

async function shortenLinks(url) {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();

    let linkBlock = document.createElement("div");
    linkBlock.classList.add("link-block");

    let originalLink = document.createElement("p");
    originalLink.classList.add("original-link");
    originalLink.textContent = link.value;
    linkBlock.appendChild(originalLink);

    let holderDiv = document.createElement("div");
    holderDiv.innerHTML = `<p class="shortened-link"> ${data.result.short_link}</p>
                          <button class="copy">Copy!</button>`;
    linkBlock.appendChild(holderDiv);

    shortenedLinks.prepend(linkBlock); //using prepend so its adds the whole block before old ones

    const shortL = shortenedLinks.querySelector(".shortened-link");
    const copyBtn = shortenedLinks.querySelector(".copy"); // this way we can use a simple query selector on a class so we only select the latest link
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(shortL.textContent);
      copyBtn.textContent = "Copied!";
      copyBtn.style.backgroundColor = "hsl(257, 27%, 26%)";
    });

    clearForm();
  } catch (error) {
    console.log(error);
  }
}

function clearForm() {
  let formR = document.querySelector("form");
  formR.reset();
}

function toggleNav() {
  if (mobileNav.classList.contains("none")) {
    mobileNav.classList.remove("none");
  } else {
    mobileNav.classList.add("none");
  }
}
