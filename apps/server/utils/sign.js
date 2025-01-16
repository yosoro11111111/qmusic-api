import crypto from "crypto";

const uuidGenerate = () => {
  // 生成UUID的逻辑，这里用一个简单的示例
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const generateSignData = (params) => {
  const signData =
    "zza" +
    uuidGenerate() +
    crypto
      .createHash("md5")
      .update("CJBPACrRuNy7" + params)
      .digest("hex");
  return signData;
};
