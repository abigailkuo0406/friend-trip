// import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import {BsStarHalf, BsStarFill } from 'react-icons/bs'
import styles from './arrange-schedule.module.scss'

export default function InitCard({selectedView}) {
  return (
    <>
      <ol className={styles.ol}>
        <li className={styles.li}>
        {selectedView && selectedView.name &&(
          <div
            type="button"
            className="btn btn-link d-flex"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            {/* <Image
              src={selectedView.Image}
              alt={selectedView.name}
              width={120}
              hight={120}
              className="mx-2"
            /> */}
            <h6 className="my-auto">{selectedView.name}</h6>
          </div>
          )}
        </li>
      </ol>
    </>
  )
}
