# 排行榜

## 排行榜单列表

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
