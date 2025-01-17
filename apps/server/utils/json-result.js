export default class JsonResult {
  static sucess(data = null, msg="") {
    const result = {
      msg,
      data: data,
    };
    // 移除没有设置的选项
    Object.keys(result).forEach((k) => {
      if (!result[k]) {
        delete result[k];
      }
    });
    result['code'] = 0;
    return result;
  }

  static error(msg = "", code = -1) {
    const result = {
      msg,
      data: null,
    };
     // 移除没有设置的选项
    Object.keys(result).forEach((k) => {
      if (!result[k]) {
        delete result[k];
      }
    });
    result['code'] = code;
    return result;
  }
}
