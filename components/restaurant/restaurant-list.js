import React from 'react'
// import styles from './restaurant.css'


export default function RestaurantList() {
  return (
    <div
      classNameName="card"
      style={{ width: 18 + 'rem' }}
      d-flex
      flex-row
      mb-3
    >
      <img src="..." className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">長角96</h5>
        <p className="card-text">
          營業時間：週一~週日 11:30-22:00(供餐至21:00) 料理特色：牛排、酒吧
          訂位須知：...
        </p>
        <div d-flex justify-content-evenly>
          <a href="#" className="btn btn-primary">
            邀請好友
          </a>
          <a href="#" className="btn btn-primary">
            訂位
          </a>
        </div>
      </div>
    </div>
  )
}
