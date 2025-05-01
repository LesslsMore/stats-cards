在 README 中展示网站数据，也可用于网站状态监控

https://github.com/songquanpeng/stats-cards

主要用来放在 github 主页
### 效果演示
![](https://stats-cards-api.vercel.app/api/greasyfork?id=1244493-lesslsmore&lang=zh-CN)
![](https://stats-cards-api.vercel.app/api/github?username=lesslsmore&lang=zh-CN)
![](https://stats-cards-api.vercel.app/api/csdn?id=Tom995083162&lang=zh-CN)
![](https://stats-cards-api.vercel.app/api/bilibili/?id=4608012&lang=zh-CN)
![](https://stats-cards-api.vercel.app/api/leetcode?username=lesslsmore&cn=true&lang=zh-CN)
![](https://stats-cards-api.vercel.app/api/nowcoder?id=889725452&lang=zh-CN)
### Greasy Fork

这里在原代码基础上添加了油猴脚本的数据显示，主要显示作者总安装量前两位的脚本名称

使用 express 框架在 app.js 注册接口 api，调用 crawler 使用 axios 访问 `https://greasyfork.org/zh-CN/users/1244493` 通过 cheerio 解析 dom 提取数据，调用 render 根据获取数据渲染卡片，这里具体实现可以参考源码 `https://github.com/LesslsMore/stats-cards`

```js
app.use('/api/greasyfork', greasyfork);

api/greasyfork.js
crawler/greasyfork.js
render/greasyfork.js
```
### vercel

使用 vercel 可以免费部署 nodejs 代码，下面是部署的一个示例

https://stats-cards-api.vercel.app/

另外 bilibili 的数据需要配置环境变量 BILIBILI_SESSDATA，可以从 b 站 f12 查看接口携带 cookie 中的 SESSDATA 获取到

### 最后

如果觉得有价值，赞赏当然最好了，转发分享也不错

![](https://raw.githubusercontent.com/LesslsMore/blog-img/master/picgo/%E8%B5%9E%E8%B5%8F.png)
