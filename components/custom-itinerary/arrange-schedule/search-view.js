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
}) {
  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas position-absolute z-3">
          {/* sidebar */}
          <div className="itinerary-fade-in  position-absolute">
            <div className="trip-list">
              <div
                className="trip-list-header-top bg-light "
                style={{ height: 700, width: 320 }}
              >
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
                    <input
                      className="form-control me-2 mb-3"
                      type="text"
                      placeholder="請輸入城市"
                      value={inputValue}
                      onChange={onInputChange}
                    />

                    <div>
                      <div className="">
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
                                  {selectedView.weekday_text.map(
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
                                className="btn btn-secondary mx-2"
                              >
                                儲存景點
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
      </div>
    </>
  )
}
