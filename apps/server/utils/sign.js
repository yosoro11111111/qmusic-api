
// 一开始用的这种方案：https://blog.csdn.net/andrew_wf/article/details/142522984
// 后来发现不行换成了现在这种： https://jixun.uk/posts/2024/qqmusic-zzc-sign

import crypto from "node:crypto";

const hexRevTable = {};
for (let i = 0; i < 16; i++) {
  hexRevTable[i.toString(16)] = i;
}

function hashText(text) {
  const sha1Inst = crypto.createHash("sha1");
  sha1Inst.update(Buffer.from(text, "utf-8"));
  return sha1Inst.digest().toString("hex").toUpperCase();
}

const PART_1_INDEXES = [23, 14, 6, 36, 16, 40, 7, 19];
const PART_2_INDEXES = [16, 1, 32, 12, 19, 27, 8, 5];
const SCRAMBLE_VALUES = [
  89, 39, 179, 150, 218, 82, 58, 252, 177, 52, 186, 123, 120, 64, 242, 133, 143,
  161, 121, 179,
];

function pickHashByIdx(hash, indexes) {
  return indexes.map((idx) => hash[idx]).join("");
}

export default (text) => {
  const sha1 = hashText(text);
  const part1 = pickHashByIdx(sha1, PART_1_INDEXES);
  const part2 = pickHashByIdx(sha1, PART_2_INDEXES);
  const part3 = SCRAMBLE_VALUES.map(
    (scramble, i) => scramble ^ parseInt(sha1.slice(i * 2, i * 2 + 2), 16)
  );
  const b64Part = Buffer.from(part3)
    .toString("base64")
    .replace(/[\\/+=]/g, "");
  return `zzc${part1}${b64Part}${part2}`.toLowerCase();
};
