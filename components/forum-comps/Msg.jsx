import styles from './Msg.module.css'
import Image from 'next/image'
function Msg() {
  return (
    <>
      {/* 頭圖 + 名稱 + 留言內容 + 留言時間 */}
      <div className={styles.flex}>
        <div className={styles.messageBox}>
          <div className={styles.imgBox}>
            <Image
              className={styles.avatar}
              src="/face/face3.png"
              alt="avatar"
              fill
            />
          </div>
          <h3 className={styles.username}>Eddie</h3>
          <p>I love Maria!!!!!</p>
        </div>
        <p className="fs-6 text fw-lighter">評論時間：2023/07/18 17:00</p>
      </div>
    </>
  )
}

export default Msg
