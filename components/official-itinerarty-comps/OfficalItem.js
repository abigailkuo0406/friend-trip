import AdminLayout from '@/components/layout/admin-layout'
import styles from '@/pages/official-itinerary/style.module.css'
import Image from 'next/image'
import img1 from '@/public/officialimg/1.jpg'
import img2 from '@/public/officialimg/2.jpg'
import img3 from '@/public/officialimg/3.jpg'
import img4 from '@/public/officialimg/4.jpg'
import img5 from '@/public/officialimg/5.jpg'
import img6 from '@/public/officialimg/6.jpg'
import img7 from '@/public/officialimg/7.jpg'
import img8 from '@/public/officialimg/8.jpg'
import img9 from '@/public/officialimg/9.jpg'

export default function OfficialItinerary() {
  return (
    <div className={styles.productlist}>
      <h1 className={styles.title}>官方行程</h1>
      <div className={styles.select}>
        <label htmlFor="order">排序方式</label>
        <select name="order" id="order">
          <option value="">最新日期</option>
          <option value="">排行榜</option>
        </select>
      </div>
      <div className={styles.clearfix}></div>
      <ul>
        <li>
          <Image width={50} height={130} src={img1} alt="1" />
          <h10>碧湖公園。內湖小白宮｜在水一方的夢幻閱覽室</h10>
          <br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            <a href="./reserve.js">參加</a>
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img2} alt="2" />
          <h10>碧山巖櫻花隧道開花了。內湖最美粉紅風暴</h10>
          <br />
          <span>TWD 42000/2-4人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img3} alt="3" />
          <h10>台北賞櫻景點。拍攝夜櫻最佳時間點</h10>
          <br />
          <span>TWD 42000/2-3人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img4} alt="4" />
          <h10>大溝溪生態治水園區。美麗花海賞心悅目</h10>
          <br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img5} alt="5" />
          <h10>圓覺瀑布。壯觀的巨石陣溪谷｜</h10>
          <br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img6} alt="6" />
          <h10>大溝溪步道。台北內湖溪谷幽境</h10>
          <br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img7} alt="7" />
          <h10>華山文創園區與周邊。咖啡美食20家</h10>
          <br />
          <span>TWD 42000/2-6人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img8} alt="8" />
          <h10>白石湖吊橋。山間的紫色飛龍</h10>
          <br />
          <span>TWD 42000/2-4人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
        <li>
          <Image width={50} height={130} src={img9} alt="9" />
          <h10>內溝溪自然生態步道。五分埤生態濕地</h10>
          <br />
          <span> TWD 42000/2-3人</span>
          <div className={styles.empty_star}>★★★★★</div>
          <button type="button" className={styles.bnt}>
            參加
          </button>
        </li>
      </ul>
    </div>
  )
}

OfficialItinerary.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
