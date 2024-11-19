document.querySelectorAll(".like-button").forEach((button) => {
    button.addEventListener("click", () => {
      let count = button.querySelector(".like-count");
      count.textContent = parseInt(count.textContent) + 1;
    });
  });
  