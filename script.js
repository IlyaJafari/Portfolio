document.querySelectorAll(".copy").forEach((copyButton) => {
  copyButton.addEventListener("click", () => {
    const targetElement = document.querySelector(copyButton.dataset.copy);
    const textToCopy = targetElement.textContent.replace(/\s+/g, " ").trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      const label = copyButton.querySelector(".copy-label");
      const originalText = label.textContent;

      copyButton.disabled = true;
      label.textContent = "Copied";

      setTimeout(() => {
        copyButton.disabled = false;
        label.textContent = originalText;
      }, 1000);
    });
  });
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
