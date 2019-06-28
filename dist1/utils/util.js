'use strict';

function getCurrentDate() {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var day = myDate.getDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return [year, month, day].join('-');
}

function getCurrentTime() {
  var myDate = new Date();
  var min = myDate.getMinutes();
  if (parseInt(min) < 10) {
    min = '0' + min;
  }

  var hour = myDate.getHours();
  if (parseInt(hour) < 10) {
    hour = '0' + hour;
  }

  var second = myDate.getSeconds();
  if (parseInt(second) < 10) {
    second = '0' + second;
  }
  return [hour, min, second].join(':');
}

module.exports = {
  getCurrentDate: getCurrentDate,
  getCurrentTime: getCurrentTime
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiZ2V0Q3VycmVudERhdGUiLCJteURhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJqb2luIiwiZ2V0Q3VycmVudFRpbWUiLCJtaW4iLCJnZXRNaW51dGVzIiwicGFyc2VJbnQiLCJob3VyIiwiZ2V0SG91cnMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxjQUFULEdBQTBCO0FBQ3hCLE1BQU1DLFNBQVMsSUFBSUMsSUFBSixFQUFmO0FBQ0EsTUFBSUMsT0FBT0YsT0FBT0csV0FBUCxFQUFYO0FBQ0EsTUFBSUMsUUFBUUosT0FBT0ssUUFBUCxLQUFvQixDQUFoQztBQUNBLE1BQUlDLE1BQU1OLE9BQU9PLE9BQVAsRUFBVjtBQUNBLE1BQUlILFFBQVEsRUFBWixFQUFnQkEsY0FBWUEsS0FBWjtBQUNoQixNQUFJRSxNQUFNLEVBQVYsRUFBY0EsWUFBVUEsR0FBVjtBQUNkLFNBQU8sQ0FBQ0osSUFBRCxFQUFPRSxLQUFQLEVBQWNFLEdBQWQsRUFBbUJFLElBQW5CLENBQXdCLEdBQXhCLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxjQUFULEdBQTBCO0FBQ3hCLE1BQU1ULFNBQVMsSUFBSUMsSUFBSixFQUFmO0FBQ0EsTUFBSVMsTUFBTVYsT0FBT1csVUFBUCxFQUFWO0FBQ0EsTUFBSUMsU0FBU0YsR0FBVCxJQUFnQixFQUFwQixFQUF3QjtBQUN0QkEsZ0JBQVVBLEdBQVY7QUFDRDs7QUFFRCxNQUFJRyxPQUFPYixPQUFPYyxRQUFQLEVBQVg7QUFDQSxNQUFJRixTQUFTQyxJQUFULElBQWlCLEVBQXJCLEVBQXlCO0FBQ3ZCQSxpQkFBV0EsSUFBWDtBQUNEOztBQUVELE1BQUlFLFNBQVNmLE9BQU9nQixVQUFQLEVBQWI7QUFDQSxNQUFJSixTQUFTRyxNQUFULElBQW1CLEVBQXZCLEVBQTJCO0FBQ3pCQSxtQkFBYUEsTUFBYjtBQUNEO0FBQ0QsU0FBTyxDQUFDRixJQUFELEVBQU9ILEdBQVAsRUFBWUssTUFBWixFQUFvQlAsSUFBcEIsQ0FBeUIsR0FBekIsQ0FBUDtBQUNEOztBQUVEUyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZuQixnQ0FEZTtBQUVmVTtBQUZlLENBQWpCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZSgpIHtcbiAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUoKVxuICBsZXQgeWVhciA9IG15RGF0ZS5nZXRGdWxsWWVhcigpXG4gIGxldCBtb250aCA9IG15RGF0ZS5nZXRNb250aCgpICsgMVxuICBsZXQgZGF5ID0gbXlEYXRlLmdldERhdGUoKVxuICBpZiAobW9udGggPCAxMCkgbW9udGggPSBgMCR7bW9udGh9YFxuICBpZiAoZGF5IDwgMTApIGRheSA9IGAwJHtkYXl9YFxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oJy0nKVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUoKVxuICBsZXQgbWluID0gbXlEYXRlLmdldE1pbnV0ZXMoKVxuICBpZiAocGFyc2VJbnQobWluKSA8IDEwKSB7XG4gICAgbWluID0gYDAke21pbn1gXG4gIH1cblxuICBsZXQgaG91ciA9IG15RGF0ZS5nZXRIb3VycygpXG4gIGlmIChwYXJzZUludChob3VyKSA8IDEwKSB7XG4gICAgaG91ciA9IGAwJHtob3VyfWBcbiAgfVxuXG4gIGxldCBzZWNvbmQgPSBteURhdGUuZ2V0U2Vjb25kcygpXG4gIGlmIChwYXJzZUludChzZWNvbmQpIDwgMTApIHtcbiAgICBzZWNvbmQgPSBgMCR7c2Vjb25kfWBcbiAgfVxuICByZXR1cm4gW2hvdXIsIG1pbiwgc2Vjb25kXS5qb2luKCc6Jylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldEN1cnJlbnREYXRlLFxuICBnZXRDdXJyZW50VGltZVxufSJdfQ==