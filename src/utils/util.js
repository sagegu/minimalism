function getCurrentDate() {
  const myDate = new Date()
  let year = myDate.getFullYear()
  let month = myDate.getMonth() + 1
  let day = myDate.getDate()
  if (month < 10) month = `0${month}`
  if (day < 10) day = `0${day}`
  return [year, month, day].join('-')
}

function getSimpleCurrentDate() {
  const myDate = new Date()
  // let year = myDate.getFullYear()
  let month = myDate.getMonth() + 1
  let day = myDate.getDate()
  if (month < 10) month = `0${month}`
  if (day < 10) day = `0${day}`
  return [month, day].join('-')
}

function getCurrentTime() {
  const myDate = new Date()
  let min = myDate.getMinutes()
  if (parseInt(min) < 10) {
    min = `0${min}`
  }

  let hour = myDate.getHours()
  if (parseInt(hour) < 10) {
    hour = `0${hour}`
  }

  let second = myDate.getSeconds()
  if (parseInt(second) < 10) {
    second = `0${second}`
  }
  return [hour, min, second].join(':')
}

//把字符串日期转为日期
function convertStrToDate(datetimeStr) {
    var mydateint = Date.parse(datetimeStr);//数值格式的时间
    if (!isNaN(mydateint)) {
        var mydate = new Date(mydateint);
        return mydate;
    }
    var mydate = new Date(datetimeStr);//字符串格式时间
    var monthstr = mydate.getMonth() + 1;
    if (!isNaN(monthstr)) {//转化成功
        return mydate;
    }//字符串格式时间转化失败
    var dateParts = datetimeStr.split(" ");
    var dateToday = new Date();
    var year = dateToday.getFullYear();
    var month = dateToday.getMonth();
    var day = dateToday.getDate();
    if (dateParts.length >= 1) {
        var dataPart = dateParts[0].split("-");//yyyy-mm-dd  格式时间             
        if (dataPart.length == 1) {
            dataPart = dateParts[0].split("/");//yyyy/mm/dd格式时间
        }
        if (dataPart.length == 3) {
            year = Math.floor(dataPart[0]);
            month = Math.floor(dataPart[1]) - 1;
            day = Math.floor(dataPart[2]);
        }
    }
    if (dateParts.length == 2) {//hh:mm:ss格式时间
        var timePart = dateParts[1].split(":");//hh:mm:ss格式时间
        if (timePart.length == 3) {
            var hour = Math.floor(timePart[0]);
            var minute = Math.floor(timePart[1]);
            var second = Math.floor(timePart[2]);
            return new Date(year, month, day, hour, minute, second);
        }
    }
    else {
        return new Date(year, month, day);
    }
}

module.exports = {
  getCurrentDate,
  getSimpleCurrentDate,
  getCurrentTime,
  convertStrToDate
}