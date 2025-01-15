# 歌单

## 分类

get接口：`getSongListCategories`

**返回结果如下：**
```js
{
    "code": 0,
    "subcode": 0,
    "message": "",
    "default": 0,
    "data": {
        "categories": [
            {
                "categoryGroupName": "热门",
                "items": [
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            },
                            {
                                "sortId": 1,
                                "sortName": "默认"
                            }
                        ],
                        "categoryId": 10000000,
                        "categoryName": "全部",
                        "usable": 0
                    }
                ],
                "usable": 0
            },
            {
                "categoryGroupName": "语种",
                "items": [
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 165,
                        "categoryName": "国语",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 167,
                        "categoryName": "英语",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 168,
                        "categoryName": "韩语",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 166,
                        "categoryName": "粤语",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 169,
                        "categoryName": "日语",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 170,
                        "categoryName": "小语种",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 203,
                        "categoryName": "闽南语",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 204,
                        "categoryName": "法语",
                        "usable": 1
                    },
                    {
                        "allsorts": [
                            {
                                "sortId": 2,
                                "sortName": "最新"
                            },
                            {
                                "sortId": 3,
                                "sortName": "最热"
                            },
                            {
                                "sortId": 4,
                                "sortName": "评分"
                            }
                        ],
                        "categoryId": 205,
                        "categoryName": "拉丁语",
                        "usable": 1
                    }
                ],
                "usable": 1
            },
            // ...
        ]
    }
}
```

## 详情

get 接口：`/getSongLists`

**参数如下：**

```js
{
  categoryId: 10000000; // 非必填，默认为10000000
}
```

**返回结果如下：**

```js
{
    "code": 0,
    "subcode": 0,
    "message": "",
    "default": 0,
    "data": {
        "uin": 0,
        "categoryId": 10000000,
        "sortId": 5,
        "sum": 11653,
        "sin": 0,
        "ein": 19,
        "list": [
            {
                "dissid": "7707261125",
                "createtime": "2020-09-06",
                "commit_time": "2020-09-06",
                "dissname": "甜度爆表 | 旋律说唱狙击少女心",
                "imgurl": "http://qpic.y.qq.com/music_cover/s4SoBc0IrDEDpHKlDkDflKbCgbic5ldSQrdsEafqvxULdib5CvKhaibww/300?n=1",
                "introduction": "",
                "listennum": 8294257,
                "score": 0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 3509852917,
                    "encrypt_uin": "oi4zNKckowE57z**",
                    "name": "我想要两颗西柚",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            },
            {
                "dissid": "7578943835",
                "createtime": "2020-05-27",
                "commit_time": "2020-05-27",
                "dissname": "丧系Rap丨渐渐不再期待任何东西",
                "imgurl": "http://qpic.y.qq.com/music_cover/1Jcpjia5qaEibPyTuy709wFiapqHbxdewwwc5yBJI7NiaNMN9XDhUJPibJA/300?n=1",
                "introduction": "",
                "listennum": 1742533,
                "score": 0,
                "version": 0,
                "creator": {
                    "type": 0,
                    "qq": 1262377137,
                    "encrypt_uin": "oK-sowol7i6i7z**",
                    "name": "离妄.",
                    "isVip": 0,
                    "avatarUrl": "",
                    "followflag": 0
                }
            }
            // ...
        ]
    }
}
```
