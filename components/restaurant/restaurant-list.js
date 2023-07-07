import React from 'react'
import Image from 'next/image'

import Img from '@/data/restaurant/rest-img.json'
import restaurant from '@/data/restaurant/rest-detail.json'

export default function RestaurantList() {
  return (
    <>
      <div className="card mb-3" style={{ 'max-width': 540 + 'px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <Image src={Img.RestImg} className="img-fluid rounded-start" alt="..."/>

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className="card-title"
              >Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
