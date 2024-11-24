function updateScreenDimensions() {
  const screenInfo = {
    screenWidth: screen.width,
    screenHeight: screen.height,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };
  document.getElementById("screen-info").textContent =
    `屏幕宽度: ${screenInfo.screenWidth}px, 屏幕高度: ${screenInfo.screenHeight}px, ` +
    `窗口宽度: ${screenInfo.windowWidth}px, 窗口高度: ${screenInfo.windowHeight}px`;
}

// 每秒更新屏幕信息
setInterval(updateScreenDimensions, 1000);
