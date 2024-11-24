document.addEventListener("DOMContentLoaded", function() {
  // 获取所有书籍元素
  const books = document.querySelectorAll(".book-item");

  // 定义事件处理器
  function handleBookClick(event) {
    alert(`你点击了： ${event.target.textContent}`);
  }

  function handleMouseOver(event) {
    event.target.style.backgroundColor = "#b2ebf2"; // 鼠标悬停
  }

  function handleMouseOut(event) {
    event.target.style.backgroundColor = ""; // 恢复原样
  }

  // 为每本书绑定事件
  books.forEach(book => {
    book.addEventListener("click", handleBookClick);
    book.addEventListener("mouseover", handleMouseOver);
    book.addEventListener("mouseout", handleMouseOut);
  });
});
