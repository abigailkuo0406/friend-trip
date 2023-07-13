import styles from '../custom-itinerary/history.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import Host from '@/assets/fake-data/fake-persona.png'


export default function Public(props) {
  // 格式化日期
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}年${month}月${day}日`
  }
  const formattedCreateAt = formatDateString(props.date) // 格式化后的創建日期
    return (
      <>
  <div className={styles.container}>
   <div className="card mx-2 mb-3" style={{width:300}}>
    {/* 行程封面照 */}
    <Image 
    src={Jiufen} 
    className="card-img-top" 
    alt="Jiufen"
    width={300}
    />
    <div className="card-body">
    <div className="d-flex mb-4">
    {/* 會員(大頭照＋名稱) */}
                <Image 
                  src={Host}
                  className="rounded-circle my-auto"
                  alt="Host"
                  width={32}
                  height={32}
                  priority={true} //圖片預先載入
                />
                <p className="d-flex align-items-center mt-3 mx-2">Amber</p>
              </div>
      <h5 className="card-title text-truncate">{props.name}</h5>   
      <div className="d-flex justify-content-between pt-2 ">
      <div className="pt-2">
      <p className="card-text ">{formattedCreateAt}</p>
      </div>
      <a href="#" className="btn btn-primary ">參加</a>
      </div>
    </div>
  </div>
</div>
      </>

    )
  }
  