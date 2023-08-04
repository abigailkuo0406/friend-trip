import styles from '@/pages/official-itinerary/reserve.module.css'
import Image from 'next/image'
import img1 from '@/public/officialimg/1.jpg'

function Reserve() {
  return (
    // <div style="width: 1000px; margin: 0 auto">
    <div className={styles.body}>
      {/* <div style={this.body}> */}
      <h1>碧湖公園。內湖小白宮｜在水一方的夢幻閱覽室.</h1>
      <br />
      {/* <img style={{ width: 800, height: 600 }} src={img1} /> */}
      <Image width={800} height={600} src={img1} alt="1" />
      {/* <p style="line-height: 80px"> */}
      <p className={styles.word}>
        隱身在內湖區的碧湖公園
        <br />
        除了是內湖居民的後花園
        <br />
        也是臺北市唯二擁有大湖泊的水景公園
        <br />
        旅遊地點: 碧湖公園
        <br />
        集合地點：台北車站
        <br />
        價格: TWD$42000/2-6人
        <br />
        <label htmlfor="start"> 參加日期:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
        <br />
        <label htmlfor="people">人數:</label>
        <input type="text" placeholder="請輸入人數" />
        <br />
        <button type="button" style="width: 100%">
          報名
        </button>
      </p>
    </div>
  )
}

export default Reserve
