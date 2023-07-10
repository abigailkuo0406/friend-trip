import React from 'react'
import Image from 'next/image'
import A from '@/assets/rest-img/rest-img-1-c.jpg'

export default function RestaurantList(props) {
  console.log(props.img)

  return (
    <>
      <div className="card mb-3" style={{ 'max-width': 540 + 'px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <Image
              src={A}
              className="img-fluid rounded-start"
              alt="..."
              // width={200 + 'px'}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.details}</p>
              <p className="card-text">
                <button>訂位</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
