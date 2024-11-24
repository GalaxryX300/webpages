document.addEventListener("click", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  const message = `点击位置: (${x}, ${y})`;
  document.getElementById("mouse-coordinates").textContent = message;
});
