// import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import {BsStarHalf, BsStarFill } from 'react-icons/bs'
import styles from './arrange-schedule.module.scss'

export default function InitCard() {
  return (
    <>
      <ol className={styles.ol}>
        <li className={styles.li}>
          <div
            type="button"
            className="btn btn-link d-flex"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <Image
              src={Jiufen}
              alt="寧夏觀光夜市"
              width={120}
              hight={120}
              className="mx-2"
            />
            <h6 className="my-auto">寧夏觀光夜市</h6>
          </div>
        </li>
      </ol>
    </>
  )
}
