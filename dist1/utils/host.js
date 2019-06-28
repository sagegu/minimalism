'use strict';

// 0 开发环境 1 测试环境 2 生产环境
var env = 0;

var host = '';
if (env === 0) {
  host = 'http://jz.com';
} else if (env == 1) {
  host = 'https://xiaoyounger.com';
} else {
  host = 'https://yiiiblog.com';
}

module.exports = {
  host: host,
  url: host + '/api',
  login: host + '/api/login',
  check_openid: host + '/api/check_openid',
  env: env,
  mapKey: '',
  appid: ''
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvc3QuanMiXSwibmFtZXMiOlsiZW52IiwiaG9zdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1cmwiLCJsb2dpbiIsImNoZWNrX29wZW5pZCIsIm1hcEtleSIsImFwcGlkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEsTUFBTSxDQUFaOztBQUVBLElBQUlDLE9BQU8sRUFBWDtBQUNBLElBQUlELFFBQVEsQ0FBWixFQUFlO0FBQ2JDLFNBQU8sZUFBUDtBQUNELENBRkQsTUFFTyxJQUFJRCxPQUFPLENBQVgsRUFBYztBQUNuQkMsU0FBTyx5QkFBUDtBQUNELENBRk0sTUFFQTtBQUNMQSxTQUFPLHNCQUFQO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkYsUUFBTUEsSUFEUztBQUVmRyxPQUFLSCxPQUFPLE1BRkc7QUFHZkksU0FBT0osT0FBTyxZQUhDO0FBSWZLLGdCQUFjTCxPQUFPLG1CQUpOO0FBS2ZELE9BQUtBLEdBTFU7QUFNZk8sVUFBUSxFQU5PO0FBT2ZDLFNBQU87QUFQUSxDQUFqQiIsImZpbGUiOiJob3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gMCDlvIDlj5Hnjq/looMgMSDmtYvor5Xnjq/looMgMiDnlJ/kuqfnjq/looNcbmNvbnN0IGVudiA9IDBcblxubGV0IGhvc3QgPSAnJ1xuaWYgKGVudiA9PT0gMCkge1xuICBob3N0ID0gJ2h0dHA6Ly9qei5jb20nXG59IGVsc2UgaWYgKGVudiA9PSAxKSB7XG4gIGhvc3QgPSAnaHR0cHM6Ly94aWFveW91bmdlci5jb20nXG59IGVsc2Uge1xuICBob3N0ID0gJ2h0dHBzOi8veWlpaWJsb2cuY29tJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaG9zdDogaG9zdCxcbiAgdXJsOiBob3N0ICsgJy9hcGknLFxuICBsb2dpbjogaG9zdCArICcvYXBpL2xvZ2luJyxcbiAgY2hlY2tfb3BlbmlkOiBob3N0ICsgJy9hcGkvY2hlY2tfb3BlbmlkJyxcbiAgZW52OiBlbnYsXG4gIG1hcEtleTogJycsXG4gIGFwcGlkOiAnJ1xufSJdfQ==