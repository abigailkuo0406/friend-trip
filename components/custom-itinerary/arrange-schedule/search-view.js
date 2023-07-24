import { useState,useEffect } from 'react'
import styles from './arrange-schedule.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { BiSearchAlt, BiMap } from 'react-icons/bi'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'


export default function SearchView({
  inputValue,
  onInputChange,
  selectedView,
  changeToAddSchedule
}) {


  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas position-absolute z-3">
          {/* sidebar */}
          <div className="itinerary-fade-in  position-absolute">
              <div
                className={`${styles.tripList}`}
              >
                {/* 切換 */}
                <ul className="nav nav-underline">
                  <li className="nav-item mt-3 mx-3">
                    <Link href="/custom-itinerary/">
                        <FaArrowLeftLong  className={styles.searchArrow}/>
                    </Link>
                  </li>
                  <li className="nav-item e">
                    <Link href="#">
                        <BiSearchAlt className={styles.search}/>
                        <p className={styles.search}>搜尋</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                        <BiMap className={`mx-5 ${styles.collect}`} />
                        <p className={`px-1 ${styles.collect}`}>我的景點收藏</p>
                    </Link>
                  </li>
                </ul>

                <nav className="navbar">
                  <div className="container-fluid">
                    <input
                      className={`form-control  ${styles.input} ` }
                      type="text"
                      placeholder="請輸入城市"
                      value={inputValue}
                      onChange={onInputChange}
                    />
                      
    

                    <div>
                      <div>
                        {selectedView && selectedView.name && (
                          <ul className={`mx-2 ${styles.text}`}>
                            <h5>{selectedView.name}</h5>
                            {/* <Image
                              src={Jiufen}
                              alt="寧夏觀光夜市"
                              width={120}
                              hight={120}
                              className="mx-2"
                            /> */}
                            <li className={styles.textRed}>
                              {selectedView.rating}
                            </li>
                            <li>
                              <IoLocationOutline />
                              {selectedView.formatted_address}
                            </li>
                            <li>
                              <div>
                                <IoTimeOutline className="align-self-start " />
                                <div className="mx-5">
                                  {selectedView.weekday_text &&
                                    selectedView.weekday_text.map(
                                      (time, index) => {
                                        return <span key={index}>{time}</span>
                                      }
                                    )}
                                </div>
                              </div>
                            </li>
                            <li className="mt-3">
                              <BsFillTelephoneFill className="mx-1" />
                              {selectedView.phone_number}
                            </li>
                            <div className="d-flex mx-2">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={changeToAddSchedule}
                              >
                                加入行程
                              </button>
                              <button type="button" className="btn btn-primary">
                                加入收藏
                              </button>
                            </div>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
   
    </>
  )
}
