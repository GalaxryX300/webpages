(function displayLastUpdate() {
  const lastUpdate = document.lastModified;
  const formattedUpdate = `网页最后修改时间: ${lastUpdate}`;
  document.getElementById("last-modified").textContent = formattedUpdate;
})();
