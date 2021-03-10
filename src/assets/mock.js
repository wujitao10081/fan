const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function () {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);

// mock案例
Mock.mock('https://www.testList.com', 'get', {
    'memberList|10': [ // Array, 随机生成数组中的元素 2到5 个
        {
            'id|+1': 1, // Number, 自增 1
            "string": "@cword(5)",
            'title': "@ctitle", // 标题
            'sentence': '@csentence(100)', // 文本 100 字段
            "number|80": 1,// 数字   "number|1-999": 1
            'content': '@cparagraph()',// 段落
            // 'id12': '@increment()', id
            // name: '@cname()',  // 中文名
            // idCard: '@id(8)',    // 身份证
            address: '@city(true)', // 地址
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),//图片
            time: '@date(yyyy-MM-dd hh:mm:ss)', // 时间

            'status|1-2': true, // Boolean, 生成 true 或 false 概率都是 1/2
            'open|1-4': true, // Boolean, 生成 true 概率 2/(2+4), false 概率 4/(2+4)
            'detail': {
                name: '@cname()', idCard: '@id()', 'show|1-4': true,
                'list|10': [
                    {
                        "string": "@cword(5)",
                        aDs: '@city(true)',
                        tXz: '@date(yyyy-MM-dd hh:mm:ss)', // 时间
                    }
                ]
            },

            // 'list|2': [   // 数组
            //     {
            //         name: '@cname()',
            //         address: '@city(true)',
            //         id: '@increment()'
            //     }
            // ],
        }
    ]
})