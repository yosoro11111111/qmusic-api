# 排行榜

## 榜单列表

get 接口：`/getTopLists`

**参数如下：**

```js
{
  page: 1, // 当前页数, 默认为1
  limit: 10 // 取出歌单数量, 默认为 10
}
```

**返回结果如下：**

```dart
[
    {
        "id": 4,
        "listenCount": 7953220,
        "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M0000037BZnw12uwex.jpg",
        "songList": [
            {
                "singername": "王睿卓",
                "songname": "大山"
            },
            {
                "singername": "Jeffrey董又霖",
                "songname": "一个人去巴黎"
            },
            {
                "singername": "欣欣",
                "songname": "故事"
            }
        ],
        "topTitle": "巅峰榜·流行指数",
        "type": 0
    },
    {
        "id": 26,
        "listenCount": 19600000,
        "picUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000000IXP762B4tPA.jpg",
        "songList": [
            {
                "singername": "G.E.M. 邓紫棋",
                "songname": "唯一"
            },
            {
                "singername": "陶喆",
                "songname": "爱我还是他"
            },
            {
                "singername": "王力宏",
                "songname": "爱错"
            }
        ],
        "topTitle": "巅峰榜·热歌",
        "type": 0
    }
]
```

## 榜单详情

get 接口：`/getRanks`

**参数如下：**

```js
{
  topId: 4, //榜单id, 默认为4
  page: 1, // 当前页数, 默认为1
  limit: 10 // 取出歌单数量, 默认为 10
}
```

**返回结果如下：**

```dart
[
    {
        "rank": 1,
        "rankType": 6,
        "rankValue": "134%",
        "recType": 0,
        "songId": 552706028,
        "vid": "",
        "albumMid": "0045sVyK0CHdXp",
        "title": "大山",
        "singerName": "王睿卓",
        "singerMid": "000dYHM61gAN16",
        "songType": 0,
        "uuidCnt": 0,
        "cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M0000045sVyK0CHdXp_1.jpg",
        "mvid": 0
    },
    {
        "rank": 2,
        "rankType": 6,
        "rankValue": "100%",
        "recType": 0,
        "songId": 214734364,
        "vid": "",
        "albumMid": "0030imsl3lAEVC",
        "title": "一个人去巴黎",
        "singerName": "Jeffrey董又霖",
        "singerMid": "000QAlxk0kXac5",
        "songType": 0,
        "uuidCnt": 0,
        "cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M0000030imsl3lAEVC_1.jpg",
        "mvid": 0
    },
    {
        "rank": 3,
        "rankType": 6,
        "rankValue": "99%",
        "recType": 0,
        "songId": 554390406,
        "vid": "",
        "albumMid": "0045v8V72MGVm8",
        "title": "故",
        "singerName": "欣欣",
        "singerMid": "001PoGAK4UFmqV",
        "songType": 0,
        "uuidCnt": 0,
        "cover": "http://y.gtimg.cn/music/photo_new/T002R300x300M0000045v8V72MGVm8_1.jpg",
        "mvid": 0
    },
]
```
