const timerHandler = (str) => {
    if (!str) {
        return '';
    }
    const isBeginTen = (str) => {
        return str >= 10 ? str : '0' + str;
    };
    const date = new Date(Number(str)); //获取一个时间对象
    const year = date.getFullYear();  // 获取完整的年份(4位,1970)
    const month = date.getMonth() + 1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
    const day = date.getDate();  // 获取日(1-31)
    const hour = date.getHours();  // 获取小时数(0-23)
    const minutes = date.getMinutes();  // 获取分钟数(0-59)
    const seconds = date.getSeconds();
    return year + '-' + isBeginTen(month) + '-' + isBeginTen(day) + ' ' + isBeginTen(hour) + ':' + isBeginTen(minutes) + ':' + isBeginTen(seconds);
};



export default timerHandler;