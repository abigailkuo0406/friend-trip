import Link from 'next/link'
import { BiSearchAlt, BiMap } from 'react-icons/bi'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { BsTelephone,BsFillStarFill} from 'react-icons/bs'
import styles from './search-view.module.css'
import {TfiLocationPin} from 'react-icons/tfi'




export default function SearchView({
  onInputChange,
  selectedView,
  changeToAddSchedule,
  photoUrl,
})

{ 
  // const formattedWeekdayText = selectedView.weekday_text.replace(/,星期/g, '\n星期')
  // const weekdayText = formattedWeekdayText.replace(/"/g, '\n')

  // console.log('weekdayText',weekdayText)

  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas position-absolute z-3 ">
          {/* sidebar */}
          <div className="itinerary-fade-in  position-absolute ">
            <div className={`${styles.tripList} `} >
              {/* 切換 */}
              <ul className={`nav ${styles.ulNav}`}>
                <li className={`nav-item${styles.li}`}>
                  <button className={`btn ${styles.searchArrow}`} onClick={changeToAddSchedule}>
                    <FaArrowLeftLong className='fs-5 mt-1'/>
                  </button>
                </li>
                <li className={`nav-item${styles.li}`}>
                  <Link href="#" className={styles.search}>
                    <BiSearchAlt className='fs-5 mt-3'/>
                    <p>搜尋</p>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="#">
                    <BiMap className={`mx-5 ${styles.collect}`} />
                    <p className={`px-1 ${styles.collect}`}>我的景點收藏</p>
                  </Link>
                </li> */}
              </ul>
              <nav className="navbar">
                <div className="container-fluid">
                  <input
                    className={`form-control  ${styles.input} `}
                    type="text"
                    placeholder="請輸入城市"
                    // value={inputValue}
                    onChange={onInputChange}
                  />
                  <div>
                    <div>
                      {selectedView && selectedView.name && (
                        <ul className={`mx-1 ${styles.text}`}>
                          <h5 className="mt-3 pb-2">{selectedView.name}</h5> 
                          <div id="placeDetails"><img src={photoUrl}></img></div>                            
                          <li>
                          <div className="mt-3 mx-2 pt-2">{selectedView.rating}<BsFillStarFill className="mb-1 mx-3"/></div>
                          </li>
                          <li>
                          <div className='mt-2 d-flex'>
                            <TfiLocationPin className="mx-1 fs-5"/>
                            <div className='mx-4'>{selectedView.formatted_address}</div>
                        
                            </div>
                          </li>
                          <li>
                            <div className='mt-2'>
                              <IoTimeOutline className="mx-1 fs-5 align-self-start" />
                              <div className="mx-5">
                                {selectedView.weekday_text &&
                                  selectedView.weekday_text.map(
                                    (time, index) => {
                                      return <span key={index}>{time}<br/></span>
                                    }
                                  )}
                              </div>
                            </div>
                          </li>
                          <li className="mt-3">
                          <div className="d-flex">
                            <BsTelephone className="mx-2 fs-5" />
                          <div className='mx-2'>{selectedView.phone_number}</div> 
                          </div>  
                          </li>
                          <div className="d-flex mt-4 flex-row-reverse px-3">
                            <button
                              type="button"
                              className={`btn btn-dark`}
                              onClick={changeToAddSchedule}
                            >
                              加入行程
                            </button>
                            {/* <button type="button" className="btn btn-light">
                              加入收藏
                            </button> */}
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
