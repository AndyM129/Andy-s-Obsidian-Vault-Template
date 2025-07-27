// 通过 ip 获取当前城市名称
// 如：北京
async function current_city (params) {
    // 接口文档：http://www.tianqiapi.com/index/doc?version=month
    const apiUrlString = "http://v1.yiketianqi.com/free/month?unescape=1&appid=71232692&appsecret=A3ujKIst";
    let apiUrl = new URL(apiUrlString);
    const res = await request({url: apiUrl.href, method: "GET"});
    let resJson = JSON.parse(res);
    return resJson.city;
}
module.exports = current_city;