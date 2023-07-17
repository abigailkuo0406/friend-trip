import styles from "./style.module.css";

export default function OfficialItinerary() {
  return (
    <div className={styles.productlist}>
    
      <h1 className={styles.title}>官方行程</h1>
      <div className={styles.select}>
      <label htmlFor="order" >排序方式</label>
        <select name="order" id="order">
          <option value="">最新日期</option>
          <option value="">排行榜</option>
        </select>
        </div>
        <div className={styles.clearfix}></div>
        <ul>
        <li>
          <img src="./public/officialimg/台北碧湖公園.jpg" alt="" />
          <h10>碧湖公園。內湖小白宮｜在水一方的夢幻閱覽室</h10><br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/碧山巖櫻花隧道開花了。內湖最美粉紅風暴.webp" alt="" />
          <h10>碧山巖櫻花隧道開花了。內湖最美粉紅風暴</h10><br />
          <span>TWD 42000/2-4人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/台北賞櫻景點。拍攝夜櫻最佳時間點.webp" alt="" />
          <h10>台北賞櫻景點。拍攝夜櫻最佳時間點</h10><br />
          <span>TWD 42000/2-3人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/大溝溪生態治水園區。美麗花海賞心悅目.webp" alt="" />
          <h10>大溝溪生態治水園區。美麗花海賞心悅目</h10><br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/圓覺瀑布。壯觀的巨石陣溪谷.webp" alt="" />
          <h10>圓覺瀑布。壯觀的巨石陣溪谷｜</h10><br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/大溝溪步道。台北內湖溪谷幽境.webp" alt="" />
          <h10>大溝溪步道。台北內湖溪谷幽境</h10><br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/華山文創園區與周邊。咖啡美食20家.webp" alt="" />
          <h10>華山文創園區與周邊。咖啡美食20家</h10><br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/白石湖吊橋。山間的紫色飛龍.webp" alt="" />
          <h10>白石湖吊橋。山間的紫色飛龍</h10><br />
          <span>TWD 42000/2-4人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
        <li>
          <img src="./public/officialimg/內溝溪自然生態步道。五分埤生態濕地.webp" alt="" />
          <h10>內溝溪自然生態步道。五分埤生態濕地</h10><br />
          <span> TWD 42000/2-3人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>參加</button>
        </li>
      </ul>
    </div>
    
  )
}
