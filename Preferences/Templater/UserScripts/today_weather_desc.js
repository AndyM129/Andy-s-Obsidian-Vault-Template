// 基于 IP，获取当前城市的天气描述
// 如：晴转多云，1~14℃，西南风<3级
async function today_weather_desc (params) {
    // 接口文档：http://www.tianqiapi.com/index/doc?version=month
    const apiUrlString = "http://v1.yiketianqi.com/free/month?unescape=1&appid=71232692&appsecret=A3ujKIst";
    let apiUrl = new URL(apiUrlString);
    const res = await request({url: apiUrl.href, method: "GET"});
    let resJson = JSON.parse(res);
    let today = resJson.data[0];
    let today_weather_desc = `${resJson.city}：${today.date}，${today.wea}，${today.tem_night}°C~${today.tem_day}°C，${today.win}`;
    return today_weather_desc;
}
module.exports = today_weather_desc;