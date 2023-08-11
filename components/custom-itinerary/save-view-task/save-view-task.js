import styles from './save-view-task.module.css'
import Image from 'next/image'

export default function SaveViewInit(props) {
  const { photo_url} = props
  return (
    <>
      <div>
        {/* <div>
          <p className="mx-3">8:00</p>
        </div> */}
        <div className='mx-5 '>
        <Image
          src={`http://localhost:3002/img/view-img/${photo_url}`}
          priority={true}
          alt={photo_url}
          width={200}
          height={150}
          quality={75} //圖片質量
          className={styles.viewImg}
        />
        </div>
      </div>
    </>
  )
}
