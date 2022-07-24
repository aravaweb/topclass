document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});