// var ToolttComponent = React.createClass
function test() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    .productlist {\n      /* width: 600px; */\n      width: 900px;\n      margin: 0 auto;\n    }\n    .productlist li {\n      float: left;\n      /* width: 138px; */\n      width: 238px;\n      border: 1px solid black;\n      height: 300px;\n      padding-bottom: 10px;\n      padding: 10px;\n      margin-left: 10px;\n      margin-right: 10px;\n      margin-top: 10px;\n      margin-bottom: 10px;\n      list-style-type: none;\n      border-radius: 10%;\n    }\n    .clearfix {\n      clear: both;\n    }\n    .productlist img {\n      width: 100%;\n      margin-bottom: 20px;\n      border-radius: 10% 10% 0 0;\n    }\n    .bnt {\n      float: right;\n      border-radius: 10px;\n      background: #674c87;\n      color: white;\n    }\n    a {\n      text-decoration: none;\n    }\n  ',
        }}
      />
      <div className="productlist">
        <h1>官方行程</h1>
        <div style={{ float: 'right' }}>
          <label htmlFor="order">排序方式</label>
          <select name="order" id="order">
            <option value>最新日期</option>
            <option value>排行榜</option>
          </select>
        </div>
        <div className="clearfix" />
        <ul>
          <li>
            <img src="img/台北碧湖公園.jpg" alt />
            <h10>碧湖公園。內湖小白宮｜在水一方的夢幻閱覽室</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/碧山巖櫻花隧道開花了。內湖最美粉紅風暴.webp" alt />
            <h10>碧山巖櫻花隧道開花了。內湖最美粉紅風暴</h10>
            <br />
            <span>TWD 42000/2-4人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/台北賞櫻景點。拍攝夜櫻最佳時間點.webp" alt />
            <h10>台北賞櫻景點。拍攝夜櫻最佳時間點</h10>
            <br />
            <span>TWD 42000/2-3人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/大溝溪生態治水園區。美麗花海賞心悅目.webp" alt />
            <h10>大溝溪生態治水園區。美麗花海賞心悅目</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/圓覺瀑布。壯觀的巨石陣溪谷.webp" alt />
            <h10>圓覺瀑布。壯觀的巨石陣溪谷｜</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/大溝溪步道。台北內湖溪谷幽境.webp" alt />
            <h10>大溝溪步道。台北內湖溪谷幽境</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/華山文創園區與周邊。咖啡美食20家.webp" alt />
            <h10>華山文創園區與周邊。咖啡美食20家</h10>
            <br />
            <span>TWD 42000/2-6人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/白石湖吊橋。山間的紫色飛龍.webp" alt />
            <h10>白石湖吊橋。山間的紫色飛龍</h10>
            <br />
            <span>TWD 42000/2-4人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
          <li>
            <img src="img/內溝溪自然生態步道。五分埤生態濕地.webp" alt />
            <h10>內溝溪自然生態步道。五分埤生態濕地</h10>
            <br />
            <span> TWD 42000/2-3人</span>
            <div className="empty_star">★★★★★</div>
            <button type="button" className="bnt">
              參加
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
