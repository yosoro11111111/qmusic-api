# 歌单

## 分类

get 接口：`/getSongListCategories`

**返回结果如下：**

```js
[
  {
    categoryGroupName: "热门",
    items: [
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
          {
            sortId: 1,
            sortName: "默认",
          },
        ],
        categoryId: 10000000,
        categoryName: "全部",
        usable: 0,
      },
    ],
    usable: 0,
  },
  {
    categoryGroupName: "语种",
    items: [
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 165,
        categoryName: "国语",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 167,
        categoryName: "英语",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 168,
        categoryName: "韩语",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 166,
        categoryName: "粤语",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 169,
        categoryName: "日语",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 170,
        categoryName: "小语种",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 203,
        categoryName: "闽南语",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 204,
        categoryName: "法语",
        usable: 1,
      },
      {
        allsorts: [
          {
            sortId: 2,
            sortName: "最新",
          },
          {
            sortId: 3,
            sortName: "最热",
          },
          {
            sortId: 4,
            sortName: "评分",
          },
        ],
        categoryId: 205,
        categoryName: "拉丁语",
        usable: 1,
      },
    ],
    usable: 1,
  },
  // ...
];
```

## 列表

get 接口：`/getSongLists`

**参数如下：**

```js
{
  categoryId: 10000000; // 非必填，默认为10000000
}
```

**返回结果如下：**

```js
[
  {
    dissid: "7707261125",
    createtime: "2020-09-06",
    commit_time: "2020-09-06",
    dissname: "甜度爆表 | 旋律说唱狙击少女心",
    imgurl:
      "http://qpic.y.qq.com/music_cover/s4SoBc0IrDEDpHKlDkDflKbCgbic5ldSQrdsEafqvxULdib5CvKhaibww/300?n=1",
    introduction: "",
    listennum: 8294257,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 3509852917,
      encrypt_uin: "oi4zNKckowE57z**",
      name: "我想要两颗西柚",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  {
    dissid: "7578943835",
    createtime: "2020-05-27",
    commit_time: "2020-05-27",
    dissname: "丧系Rap丨渐渐不再期待任何东西",
    imgurl:
      "http://qpic.y.qq.com/music_cover/1Jcpjia5qaEibPyTuy709wFiapqHbxdewwwc5yBJI7NiaNMN9XDhUJPibJA/300?n=1",
    introduction: "",
    listennum: 1742533,
    score: 0,
    version: 0,
    creator: {
      type: 0,
      qq: 1262377137,
      encrypt_uin: "oK-sowol7i6i7z**",
      name: "离妄.",
      isVip: 0,
      avatarUrl: "",
      followflag: 0,
    },
  },
  // ...
];
```

## 详情

get 接口：`/getSongListDetail`

**参数如下：**

```js
{
  disstid: 7011264340;
}
```

**返回结果如下：**

```js
{
    "disstid": "7011264340",
    "dir_show": 1,
    "owndir": 0,
    "dirid": 14,
    "coveradurl": "",
    "dissid": 7011264,
    "login": "on**",
    "uin": "oi4AoKv5NK4s7n**",
    "encrypt_uin": "oi4AoKv5NK4s7n**",
    "dissname": "电子 · 房间里的单人舞池",
    "logo": "http://qpic.y.qq.com/music_cover/fPn0iapLleUFx4kZhMPupPjgrQDw0laibHMOUyHG5sj2PIj6uVmrWmuw/300?n=1",
    "pic_mid": "",
    "album_pic_mid": "",
    "pic_dpi": 300,
    "isAd": 0,
    "desc": "跳舞不需要舞台，打开这张歌单，自己在房间也可以嗨！不管是工作日下班回家，还是周末无聊的下午，只要打开音响按下播放键，你就拥有一个便携式舞池！",
    "ctime": 1559007935,
    "mtime": 0,
    "headurl": "http://thirdqq.qlogo.cn/g?b=sdk&k=UvosBzVKpZMsLUib0HiahsQA&s=140&t=1585916347",
    "ifpicurl": "https://y.qq.com/music/common/upload/t_cm3_photo_publish/2312599.png",
    "nick": "穿着皮鞋跳大神",
    "nickname": "穿着皮鞋跳大神",
    "type": 2,
    "singerid": 0,
    "singermid": "",
    "isvip": 1,
    "isdj": 0,
    "tags": [
        {
            "id": 24,
            "name": "",
            "pid": 24
        },
        {
            "id": 224,
            "name": "",
            "pid": 224
        },
        {
            "id": 117,
            "name": "",
            "pid": 117
        }
    ],
    "songnum": 2,
    "songids": "380090690,459782751",
    "songtypes": "13,13,",
    "disstype": 0,
    "dir_pic_url2": "",
    "song_update_time": 0,
    "song_update_num": 0,
    "total_song_num": 2,
    "song_begin": 0,
    "cur_song_num": 2,
    "songlist": [
        {
            "id": 380090690,
            "type": 0,
            "songtype": 13,
            "mid": "000o3Ay7339Lf4",
            "name": "M&E",
            "title": "M&E",
            "subtitle": "",
            "interval": 144,
            "isonly": 0,
            "language": 9,
            "genre": 22,
            "index_cd": 0,
            "index_album": 1,
            "status": 0,
            "fnote": 4009,
            "url": "",
            "time_public": "2022-10-22",
            "tid": 0,
            "sa": 1040,
            "ov": 0,
            "vs": [
                "063SHSRK1bWxwA",
                "",
                "",
                "003cINwc2kH1jw",
                "002jPzFO1KkMga",
                "",
                "",
                "",
                "",
                "000EEZKe25zbHD",
                "",
                "",
                ""
            ],
            "singer": [
                {
                    "id": 4939313,
                    "mid": "004eSOxN0JN38E",
                    "name": "KVKS",
                    "title": "KVKS"
                }
            ],
            "album": {
                "id": 31542238,
                "mid": "00408v8j1N8jwf",
                "pmid": "00408v8j1N8jwf_1",
                "name": "M&E",
                "title": "M&E",
                "subtitle": ""
            },
            "mv": {
                "id": 0,
                "vid": ""
            },
            "ksong": {
                "id": 0,
                "mid": ""
            },
            "file": {
                "media_mid": "000o3Ay7339Lf4",
                "size_try": 960887,
                "b_30s": 0,
                "e_30s": 60000,
                "try_begin": 0,
                "try_end": 0,
                "size_24aac": 0,
                "size_48aac": 875979,
                "size_96aac": 1751622,
                "size_192aac": 3480852,
                "size_192ogg": 3400320,
                "size_128mp3": 2305240,
                "size_320mp3": 5762808,
                "size_aac": 875979,
                "size_ogg": 3400320,
                "size_128": 2305240,
                "size_320": 5762808,
                "size_ape": 0,
                "size_flac": 26742426,
                "size_dts": 0,
                "size_hires": 0
            },
            "volume": {
                "gain": 0,
                "peak": 0,
                "lra": 0
            },
            "pay": {
                "pay_month": 1,
                "price_track": 200,
                "price_album": 0,
                "pay_play": 1,
                "pay_down": 1,
                "pay_status": 0,
                "time_free": 0
            },
            "action": {
                "switch": 16893697,
                "msgid": 13,
                "msgpay": 6,
                "alert": 2,
                "icons": 12992510
            }
        },
        {
            "id": 459782751,
            "type": 0,
            "songtype": 13,
            "mid": "004FIgVx3Htypw",
            "name": "Someone special",
            "title": "Someone special",
            "subtitle": "",
            "interval": 192,
            "isonly": 0,
            "language": 5,
            "genre": 22,
            "index_cd": 0,
            "index_album": 1,
            "status": 0,
            "fnote": 4009,
            "url": "",
            "time_public": "2023-12-26",
            "tid": 0,
            "sa": 65536,
            "ov": 0,
            "vs": [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "0000SMHM29oIbj",
                "",
                "",
                ""
            ],
            "singer": [
                {
                    "id": 2855604,
                    "mid": "003tWolR3gJ02F",
                    "name": "Kemmoe",
                    "title": "Kemmoe"
                }
            ],
            "album": {
                "id": 45163392,
                "mid": "0022VWOT2Bs7QN",
                "pmid": "0022VWOT2Bs7QN_1",
                "name": "Someone special",
                "title": "Someone special",
                "subtitle": ""
            },
            "mv": {
                "id": 0,
                "vid": ""
            },
            "ksong": {
                "id": 0,
                "mid": "003ScAiY0fObRG"
            },
            "file": {
                "media_mid": "004FIgVx3Htypw",
                "size_try": 0,
                "b_30s": 0,
                "e_30s": 0,
                "try_begin": 47545,
                "try_end": 89309,
                "size_24aac": 0,
                "size_48aac": 1173654,
                "size_96aac": 2348731,
                "size_192aac": 4630013,
                "size_192ogg": 4469261,
                "size_128mp3": 3076427,
                "size_320mp3": 7690697,
                "size_aac": 1173654,
                "size_ogg": 4469261,
                "size_128": 3076427,
                "size_320": 7690697,
                "size_ape": 0,
                "size_flac": 39037648,
                "size_dts": 0,
                "size_hires": 0
            },
            "volume": {
                "gain": 0,
                "peak": 0,
                "lra": 0
            },
            "pay": {
                "pay_month": 1,
                "price_track": 200,
                "price_album": 0,
                "pay_play": 0,
                "pay_down": 1,
                "pay_status": 0,
                "time_free": 0
            },
            "action": {
                "switch": 16889603,
                "msgid": 14,
                "msgpay": 6,
                "alert": 2,
                "icons": 8535932
            }
        }
    ],
    "visitnum": 146379,
    "cmtnum": 0,
    "buynum": 0,
    "scoreavage": "0.0",
    "scoreusercount": 0
}
```
