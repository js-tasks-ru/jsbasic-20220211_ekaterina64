function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  button.addEventListener('click', () => {
    const div = document.querySelector("#text");
    div.hidden = !div.hidden;
  });
}
