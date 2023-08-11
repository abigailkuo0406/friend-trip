import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import styles from './save-view-task.module.css'

export default function CoverPhoto(props) {
 const {itinName,itinCoverPhoto}=props

  return (

    <>
      <Image
        src={`http://localhost:3002/img/itinerary-photo/${itinCoverPhoto}`}
        alt={itinCoverPhoto}
        width={500}
        height={200}
        quality={75} //圖片質量
        style={{ borderRadius: '5px' }}
        priority={true} //圖片預先載入
        className={styles.coverPhoto}
      />
      <h3 className="position-absolute bottom-0 start-0 text-white mx-3">
       {itinName}
      </h3>
    </>
  )
}
