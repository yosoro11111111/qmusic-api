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
  topId: 4, //榜单id
  page: 1, // 当前页数, 默认为1
  limit: 10 // 取出歌单数量, 默认为 10
}
```

**返回结果如下：**

```dart
{
    "topId": 4,
    "recType": 10005,
    "topType": 0,
    "updateType": 1,
    "title": "流行指数榜",
    "titleDetail": "流行指数榜 第22天",
    "titleShare": "流行指数榜 2025年第22天",
    "titleSub": "",
    "intro": "1.榜单定义：QQ音乐站内播放相对涨幅排名前100首歌曲。<br>2.更新频率：每日更新。<br>3.排序依据：按照歌曲在QQ音乐移动端登陆用户中产生的完整播放周环比增长率进行排序。",
    "cornerMark": 0,
    "period": "2025-01-22",
    "updateTime": "2025-01-22",
    "history": {
        "year": [],
        "subPeriod": []
    },
    "listenNum": 7953220,
    "totalNum": 100,
    "song": [
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

    ],
    "headPicUrl": "http://y.gtimg.cn/music/photo_new/T003R500x500M000002oRIzQ37RC9n.jpg",
    "frontPicUrl": "http://y.gtimg.cn/music/photo_new/T003R300x300M000003qr1JK3KBf0A.jpg",
    "mbFrontPicUrl": "http://y.gtimg.cn/music/photo_new/T002R300x300M0000045sVyK0CHdXp.jpg",
    "mbHeadPicUrl": "http://y.gtimg.cn/music/photo_new/T003R500x500M0000041SPHK3S27at.jpg",
    "pcSubTopIds": [],
    "pcSubTopTitles": [],
    "subTopIds": [],
    "adJumpUrl": "",
    "h5JumpUrl": "",
    "url_key": "",
    "url_params": "",
    "tjreport": "2_1_0_5_10005_4",
    "rt": 0,
    "updateTips": "每日更新",
    "bannerText": "",
    "AdShareContent": "流行指数榜 2025年第22天",
    "abt": "",
    "cityId": 0,
    "provId": 0,
    "sinceCV": 0,
    "musichallTitle": "流行指数榜",
    "musichallSubtitle": "_每日更新",
    "musichallPicUrl": "http://y.gtimg.cn/music/photo_new/T002R300x300M0000045sVyK0CHdXp_1.jpg",
    "specialScheme": "",
    "mbFrontLogoUrl": "https://y.gtimg.cn/music/photo_new/T052R300x300M000003VB5pu3yedN7.jpg",
    "mbHeadLogoUrl": "http://y.gtimg.cn/music/common/upload/test_order_channel_hitlist_con/3521144.png",
    "cityName": "",
    "magicColor": {
        "r": 194,
        "g": 186,
        "b": 188
    },
    "topAlbumURL": "http://y.gtimg.cn/music/photo_new/T002R300x300M0000045sVyK0CHdXp_1.jpg",
    "groupType": 0,
    "icon": 0,
    "adID": 0,
    "mbIntroWebUrl": "",
    "mbLogoUrl": ""
},
```
