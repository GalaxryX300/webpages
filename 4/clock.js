// 定义时钟数据对象
const clockData = {
  updateTime: function() {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      week: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][now.getDay()],
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    };
  },
  formatTime: function(time) {
    const { year, month, day, week, hour, minute, second } = time;
    let message = `${year}年${month}月${day}日 ${week} ${hour}:${minute}:${second}`;
    if (minute === 20 || minute === 50) {
      message += " 站起来活动一下吧！";
    }
    return message;
  }
};

// 更新时钟显示
function updateClock() {
  const currentTime = clockData.updateTime();
  document.getElementById("clock").textContent = clockData.formatTime(currentTime);
}

// 启动时钟
setInterval(updateClock, 1000);
