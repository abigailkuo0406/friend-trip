import  { useState } from 'react'
// import styles from './arrange-schedule.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { BiSearchAlt , BiMap } from 'react-icons/bi'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { IoLocationOutline,IoTimeOutline  } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import styles from './arrange-schedule.module.scss'
import SearchInput from './search-input'


export default function SearchView() {

  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas position-absolute z-3">
          {/* sidebar */}
          <div className="itinerary-fade-in  position-absolute" >
            <div className="trip-list">
              <div className="trip-list-header-top bg-light " style={{height:700,width:320}}>
                {/* 切換 */}
                <ul className="nav nav-underline">
                  <li className="nav-item mt-3 mx-1">
                    <Link href="/custom-itinerary/">
                      <h5>
                        <FaArrowLeftLong />
                      </h5>
                    </Link>
                  </li>
                  <li className="nav-item e">
                    <Link href="#">
                      <h5>
                        <BiSearchAlt />
                        <p>搜尋</p>
                      </h5>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                      <h4>
                        <BiMap className="mx-5" />
                        <p>我的景點收藏</p>
                      </h4>
                    </Link>
                  </li>
                </ul>
                <nav className="navbar bg-body-tertiary">
                  <div className="container-fluid">
                     <SearchInput />
                      <div>
                        <ol className={styles.ol}>
                          <li className={styles.li}>
                          <div type="button"
                            className="btn btn-link d-flex"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
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
                          <li className={styles.li}>
                          <div type="button"
                            className="btn btn-link d-flex"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
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
                      </div>
                
                  </div>
                </nav>
              </div>
            </div>
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header ">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      寧夏夜市
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Image
                      src={Jiufen}
                      style={{ width: '100%', height: 'auto' }}
                      alt="Jiufen"
                      priority={true}
                    />
                    <p>
                      <IoLocationOutline className="mx-2" />
                      103台北市大同區寧夏路寧夏夜市
                    </p>
                    <p>
                      <IoTimeOutline className="mx-2" />
                      星期六、17:00–01:00
                    </p>
                    <p>
                      <BsFillTelephoneFill className="mx-2" />
                      0987-456-794
                    </p>
                  </div>
                  <div className="modal-footer ">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      儲存景點
                    </button>
                    <button type="button" className="btn btn-primary">
                      加入收藏
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
